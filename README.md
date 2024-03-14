👋
# RestoreWhore - a RestoreCord clone
#### Copyright has been relinquished, please read the license for information on what you can do.
#### NOTE: Send all copyright notices by *MAIL* in the following format;
```
Ron Trimmer
Copyright Agent
Nemo Media, LLC
23 Grandview Dr
Lake Ozark, MO 65049
```

## Unlike RestoreCord, we won't completely mask how this works, so here's a small tutorial :)
> [!WARNING]
> [VaultCord](https://vaultcord.com) is still a way better solution than this, this is really meant for tinkerers like us. And of course, many thanks to mak for helping out :) Make sure to check out VaultCord, it's miles better than this heap of trash
> As this is a direct clone of RestoreCord (but with fixes to make it operational), there are inherit vulnerabilities within the software. Blame xenos.
> Therefore, you shouldn't use this in a production env. Just use VaultCord. Again, it's way better and more secure (like seriously, why is not hashing IPs industry standard! VaultCord hashes their IPs, so good luck ever breaking it)

## Instructions

Rent a cheap server from https://ovhcloud.com or https://pfcloud.io/ Ubuntu is a good operating service because you can find many resources using Ubuntu online
<br>
Install Nodejs on your server https://nodejs.org/en/download/package-manager
<br>
Install MySQL on server https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04
<br><br>
Connect to MySQL `mysql -u root` and create the database `CREATE DATABASE restore;` then `quit` command.
<br>
Now download source code `git clone https://github.com/rc-mill/restorewhore.git`
<br>
Navigate to source folder `cd restorewhore`
<br><br>
Install libraries `npm install`
<br>
Initialize the database tables `npx prisma migrate dev --name init`
<br>
Build the source code `npm run build` (you must do this EVERY time you change code)
<br>
Turn the site online `npm install -g pm2` and then `pm2 start npm --name "restorewhore" -- start` and `pm2 save`
<br><br>
*Note: If pm2 doesn't work for you, you can use `npm start` instead. BUT this will only work while terminal is open, so you need something like PM2 for live production sites.*
<br><br>
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
