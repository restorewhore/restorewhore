import { NextApiRequest, NextApiResponse } from "next";
import { accounts } from "@prisma/client";
import { prisma } from "../../../../../../src/db";

import dotenv from "dotenv";
dotenv.config({ path: "../../" });

import withAuthentication from "../../../../../../src/withAuthentication";

async function handler(req: NextApiRequest, res: NextApiResponse, user: accounts) { 
    return new Promise(async resolve => {
        switch (req.method) {
        case "DELETE":
            try {
                const botId: any = req.query.botid as any;
                if (!botId) return res.status(400).json({ success: false, message: "Missing Bot ID" });

                const bot = await prisma.customBots.findFirst({
                    where: {
                        clientId: BigInt(botId) as bigint,
                        ownerId: user.id,
                    },
                });
                
                if (!bot) return res.status(400).json({ success: false, message: "Bot not found" });

                const servers = await prisma.servers.findMany({ where: { customBotId: bot.id, }, });

                if (servers.length > 0)
                    return res.status(400).json({ success: false, message: "Please Delete the following servers on RestoreWhore dashboard, then try again", servers: servers.map((s) => s.id) });
                

                await prisma.customBots.delete({ where: { clientId: bot.clientId, }, }).then(() => {
                    return res.status(200).json({ success: true, message: "Bot successfully deleted" });
                }).catch((err) => {
                    console.error(err);
                    return res.status(400).json({ success: false, message: "Something went wrong" });
                });
            }
            catch (err: any) {
                console.error(err);
                return res.status(400).json({ success: false, message: "Something went wrong" });
            }
            
        default: return res.status(405).json({ success: false, message: "Method not allowed" });
        }
    });
}

export default withAuthentication(handler);