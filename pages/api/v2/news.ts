import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../src/db";
import { news } from "@prisma/client";
import { createRedisInstance } from "../../../src/Redis";

const redis = createRedisInstance();

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" });

    const news: news[] = [];
    console.warn('before redis')
    const cached = await redis.get("news");

    console.warn('after redis')

    if (cached) return res.status(200).json(JSON.parse(cached));

    console.warn('before query')
    await prisma.news.findMany({
        orderBy: {
            id: "desc"
        }
    }).then((news) => {
        const response = {
            success: true,
            news: news.map((n) => {
                return {
                    id: n.id,
                    title: n.title,
                    content: n.content,
                    author: n.author,
                    severity: n.severity,
                    createdAt: n.createdAt,
                };
            })
        };
        console.warn('after query')

        redis.set("news", JSON.stringify(response), "EX", 60 * 60 * 6);
        console.warn('after redis set')
        return res.status(200).json(response);
    }).catch((err) => {
        console.error(err)
        return res.status(500).json({ success: false, message: "Internal server error" });
    });
}

export default handler;