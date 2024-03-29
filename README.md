👋
# RestoreWhore

> [!WARNING]
> [VaultCord](https://vaultcord.com) is still a way better solution than this, this is really meant for tinkerers like us. And of course, many thanks to mak for helping out :) Make sure to check out VaultCord, it's miles better than this heap of trash.
> 
> As this is a open-sourced project (but with fixes to make it operational), there are inherit vulnerabilities within the software. Blame xenos.
> 
> Therefore, you shouldn't use this in a production env. Just use VaultCord. Again, it's way better and more secure (like seriously, why is not hashing IPs industry standard! VaultCord hashes their IPs, so good luck ever breaking it)

## Instructions

Rent a cheap server from [OVH Cloud](https://ovhcloud.com), [HiVelocity](https://hivelocity.net), or [PfCloud](https://pfcloud.io/). Make sure to use Ubuntu, as it's a decent Linux distro and you can find many resources/examples that use Ubuntu online

[Install Node.js on your server](https://nodejs.org/en/download/package-manager)

Install MySQL on your server. [Here's an example using Ubuntu.](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)


Connect to MySQL using `mysql -u root` and create the database using `CREATE DATABASE restore;`, then run the `quit` command.
<br>


Download & clone the source code using `git clone https://github.com/restorewhore/restorewhore.git`
<br>

Navigate to the folder Git created for you (`cd restorewhore`)

Install all the required dependencies using `npm install`

Initialize the database tables with `npx prisma migrate dev --name init`

Build the source code with `npm run build` 
> [!IMPORTANT]
> You must rebuild the source code with `npm run build` EVERY time you change code!
> 
Turn the site online `npm install -g pm2` and then `pm2 start npm --name "restorewhore" -- start` and `pm2 save`

> [!NOTE]
> If pm2 doesn't work for you, you can use `npm start` instead. However, this will only work while terminal is open, so you need something like PM2 for live production sites.
> 
Profit!

## Extra notes

.env file explained:

`DATABASE_URL` is any "mysql://" connection string. You can create a self-hosted database, or use something like [DigitalOcean](https://digitalocean.com).

`BUILD_DIR` is the directory the static files (will be the files hosted on the server). Recommended to just leave it as "dist".

`JWT_SECRET` is the JSON Web Token secret. You must think of an intial password (for example, "RestoreCord"). Then, use a JWT 'encryptor' that will turn that initial password into an actual usable JWT.

`HCAPTCHA_SECRET` is the HCaptcha secret key. You can sign up [here](https://hcaptcha.com). 

`COINBASE_API_KEY` is the CoinBase API key. However, we don't use this, so it is not needed.

`STRIPE_SECRET_KEY` is the Stripe API key. Similar to the Coinbase key, we don't use it, so it isn't needed.

`IPINFO_TOKEN` is the token for IPInfo. You can signup [here](https://ipinfo.io). This is used for the "connection info" portion of the webhook logs.

`NODE_ENV` is the environment nodejs is running in. This should be kept as "`production`".

`SENDGRID_API_KEY` is the SendGrid API key used for sending support/noreply emails. However, we mostly removed this functionality, as it isn't required.

`PROXYCHECK` is the Proxycheck API key used for checking if a connection is from a VPN or not. You can signup [here](https://proxycheck.io).

`PLATFORM` is the same as `NODE_ENV`, so keep it the same.

`CF_API_TOKEN` is your Cloudflare API token. You can get it [here](https://dash.cloudflare.com/profile/api-tokens). Make sure to get the "Global API Key"!

`CLOUDFLARE_ZONE_ID` is the zone your domain is in. You can get it by going to the [Cloudflare dashboard](https://dash.cloudflare.com), going to your domain, and scrolling down. You should see "Zone ID" and a bunch of random letters/numbers below it. That is your Zone ID.

#### Now that you have the configuration mostly setup,
You should change the Sitekey (use Findall and search for "sitekey"), and use the SiteKey (**NOT THE SITEKEY SECRET**) that you got from [HCaptcha](https://hcaptcha.com).

You can use Findall to replace any mentions of "RestoreWhore" with your own name (but first, you should replace "restorewhore.com" with the domain you're going to be using).

Next, you should go onto your server and install [Node.js](https://nodejs.org) if you haven't already.

After you setup Node.js, you should run `npm install`. This will install all the required dependencies.

And, if you did everything correct, you should be able to run `npm run start`, and the server should be online!

> [!NOTE]
> You can use the provided run.sh script to automate the running of the server if you know what you're doing, but it isn't nessecarily required.
