import { NextApiRequest, NextApiResponse } from "next/types";
import { accounts } from "@prisma/client";

import withAuthentication from "../../../src/withAuthentication";
import * as coinbase from "coinbase-commerce-node";

var Client = coinbase.Client;
Client.init(process.env.COINBASE_API_KEY!);

async function handler(req: NextApiRequest, res: NextApiResponse, user: accounts) {
    return new Promise(async (resolve, reject) => {
        const { plan, id } = req.body;
        if (!id || !plan) return res.status(400).json({ success: false, message: "Missing parameters" });
        
        let amount = "15.00"
        switch (plan) {
        case "premium":             amount = "15.00";   break;
        case "business":            amount = "30.00";   break;
        case "enterprise":          amount = "200.00";  break;
        case "premium_monthly":     amount = "2.00";    break;
        case "business_monthly":    amount = "5.00";    break;
        case "enterprise_monthly":  amount = "20.00";   break;
        }

        if (user.referrer === (25555 || 38))    amount = (Number(amount) - (Number(amount) * 0.15)).toFixed(2);
        else if (user.referrer !== null)        amount = (Number(amount) - (Number(amount) * 0.05)).toFixed(2);
        else                                    amount = String(Number(amount) * 1.10);
        

        const charge = await coinbase.resources.Charge.create({
            name: "RestoreWhore Subscription",
            description: `RestoreWhore ${plan} Subscription ${user.referrer ? `(Discount applied)` : ""}`,
            local_price: {
                amount: amount,
                currency: "EUR"
            },
            pricing_type: "fixed_price",
            metadata: {
                account_id: user.id,
                plan: plan,
            },
            redirect_url: `https://restorewhore.com/dashboard/upgrade?s=2`,
            cancel_url: `https://restorewhore.com/dashboard/upgrade?c=1`,
        });

        return res.status(200).json({
            redirect: charge.hosted_url,
        });
    });
}

export default withAuthentication(handler);