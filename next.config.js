/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
    poweredByHeader: false,
    images: {
        domains: [
            "restorewhore.com",
            "cdn.discordapp.com",
            "cdn.discord.com",
            "i.imgur.com",
            "docs.restorecord.com",
            "cdn.trustpilot.net",
        ],
    },
    staticPageGenerationTimeout: 300,
    distDir: process.env.BUILD_DIR,
};
