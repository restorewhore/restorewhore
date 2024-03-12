import { verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "./db"
import Email from "./email";

const withAuthentication = (next: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization;

    try {
        if (!token || typeof token !== "string") throw new Error(50014 as any);

        let JWTInfo = verify(token, process.env.JWT_SECRET!) as { id: number; };
        if (!JWTInfo) console.warn("No valid JWT info");
        if (!JWTInfo) throw new Error(50014 as any);
        console.warn("JWTInfo", JWTInfo)
        const sessions = await prisma.sessions.findMany({ where: { accountId: JWTInfo.id, token: token } });
        console.warn("sessions length", sessions.length)
        if (sessions.length === 0) throw new Error(50014 as any);

        const user = await prisma.accounts.findFirst({ where: { id: JWTInfo.id } });
        if (!user) throw new Error(10001 as any);

        if (user.role !== null && user.role !== "free" && user.expiry !== null && new Date(user.expiry) < new Date(Date.now())) {
            await prisma.accounts.update({ where: { id: user.id }, data: { role: "enterprise", expiry: null } });

            await Email.send({
                to: user.email,
                from: {
                    email: "no-reply@support.cosmicnsfw.com",
                    name: "RestoreWhore"
                },
                subject: `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} Subscription Expired`,
                text: `Hello ${user.username}, Your ${user.role.charAt(0).toUpperCase() + user.role.slice(1)} subscription has expired. Please renew your subscription to continue using RestoreWhore.`,
                html: `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            <title>RestoreCord</title>
                        </head>
                        <body>
                            <h1 style="text-align: center; margin-top: 1.5rem; line-height: 2rem; font-size: 2.25rem; font-weight: 600; margin-bottom: 1rem; color: rgb(79, 70, 229);">
                                RestoreCord
                            </h1>
                            <div style="padding: 1rem; max-width: 30rem; margin-left: auto;margin-right: auto; width: 100%; border-radius: 0.75rem; border-width: 1px; background: rgb(250, 250, 250);">
                                <h2 style="color: rgb(0, 0, 0); font-size: 1.75rem; line-height: 2rem; font-weight: 600; line-height: 1.25; margin-bottom: 1rem">
                                ${user.role.charAt(0).toUpperCase() + user.role.slice(1)} Subscription Expired
                                </h2>
                                <div>
                                    <p style="white-space: pre-line; color: rgb(0, 0, 0); font-weight: 400; margin-bottom: 0.75rem; overflow-wrap: break-word; font-size: 1rem;">
                                        Hello ${user.username},
                                        <br />
                                        Your ${user.role.charAt(0).toUpperCase() + user.role.slice(1)} subscription has expired. Please <a href="https://restorewhore.com/dashboard/upgradee">renew</a> your subscription if you like to keep using ${user.role.charAt(0).toUpperCase() + user.role.slice(1)} plan features.
                                        <br />
                                        <small>Quick tip: If you paid with Stripe (Credit/Debit Card, Apple Pay, Google Pay, iDeal, etc.), your subscription will automatically renew within the next few hours, and you can safely ignore this email.</small>
                                        <br />
                                        If you have any questions, please contact us at <a style="color: rgb(56,189, 248);" href="mailto:contact@restorewhore.com">contact@restorewhore.com</a>.
                                        <br />
                                        Sincerely,
                                        RestoreCord
                                    </p>
                                </div>
                                <div style="text-align: center; margin-top: 1rem;">
                                    <em style="color: rb(190, 198, 213)">
                                        Copyright &#169; 2024 RestoreCord. All rights reserved.
                                    </em>
                                </div>
                            </div>
                        </body>
                    </html>
                `,
            }).then(() => {
                console.log(`[EMAIL] [${new Date().toLocaleString()}] ${user.role} Subscription Expired: ${user.username} (${user.email})!`);
            }).catch((err: any) => {
                console.error(err);
            });

        }
      
        return await next(req, res, user)
    } catch (err: any) {
        console.warn("err name", err?.name)
        if (err?.name === "" || err?.name === "TokenExpiredError" || err?.name === "JsonWebTokenError" || err?.name === "NotBeforeError") err.message = 50014;
        
        err.message = parseInt(err.message);

        switch (err.message) {
        case 10001: return res.status(404).json({ code: err.message, message: "Unknown account" })
        case 50014: return res.status(401).json({ code: err.message, message: "Invalid authentication token provided" })
        default: return res.status(500).end("internal server error")
        }
    }
}

export default withAuthentication;
