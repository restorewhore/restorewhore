import axios from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!req.headers.authorization) return res.status(400).json({ success: false, message: "No authorization header provided" });
            const token = req.headers.authorization as string;

            await axios.get("https://discord.com/api/v10/users/@me/guilds", {
                headers: {
                    Authorization: `${token}`,
                },
                validateStatus: () => true,
                            }).then(async (response) => {
                return res.status(200).json(response.data);
            }).catch((error) => {
                return res.status(400).json({ success: false, message: error.message });
            });
        } catch (e) {
            return res.status(500).json({ success: false, message: "Internal server error" });
        }
    });
}