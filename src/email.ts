import Email from "@sendgrid/mail";
if (process.env.SENDGRID_API_KEY)
    Email.setApiKey(process.env.SENDGRID_API_KEY as string);
if (!process.env.SENDGRID_API_KEY)
    Email.setApiKey("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" as string);
export default Email;