import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { AppProps } from "next/app";
import { Router } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { TokenProvider } from "../src/token";


import theme from "../src/theme";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "../src/createEmotionCache";
import Head from "next/head";
import NProgress from "nprogress";
import dynamic from "next/dynamic"

import "nprogress/nprogress.css";
import "../public/styles/globals.css";
import "aos/dist/aos.css";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const queryClient = new QueryClient();

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    useEffect(() => {
        window.onoffline = () => {
            document.body.innerHTML = "";
            document.body.innerHTML = `
            <style>
                @media (min-width: 600px) {
                    .offline-body {
                        display: flex;
                        justify-content: space-between;
                        align-content: space-between;
                        flex-direction: column;
                        align-items: center;
                        margin-left: 25vh;
                        margin-right: 25vh;
                        margin-top: 25vh;
                        margin-bottom: 25vh;
                    }
                }

                @media (max-width: 600px) {
                    .offline-body {
                        display: flex;
                        justify-content: space-between;
                        align-content: space-between;
                        flex-direction: column;
                        align-items: center;
                        margin-left: 10vh;
                        margin-right: 10vh;
                        margin-top: 10vh;
                        margin-bottom: 10vh;
                    }
                }
                
                @media (max-width: 400px) {
                    .offline-body {
                        display: flex;
                        justify-content: space-between;
                        align-content: space-between;
                        flex-direction: column;
                        align-items: center;
                        margin-left: 5vh;
                        margin-right: 5vh;
                        margin-top: 5vh;
                        margin-bottom: 5vh;
                    }
                }
                
                .offline-h1 {
                    font-size: 2rem;
                    font-weight: 500;
                    color: ${theme.palette.text.primary};
                }

                .offline-p {
                    font-size: 1.5rem;
                    font-weight: 400;
                    color: ${theme.palette.text.primary};
                }

                .offline-button {
                    appearance: button;
                    backface-visibility: hidden;
                    background-color: #4f46e5;
                    border-radius: 6px;
                    border-width: 0;
                    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
                    box-sizing: border-box;
                    color: #fff;
                    cursor: pointer;
                    font-family: -apple-system,system-ui,"Segoe UI",Inter,"Helvetica Neue",Ubuntu,sans-serif;
                    font-size: 100%;
                    height: 44px;
                    line-height: 1.15;
                    margin: 12px 0 0;
                    outline: none;
                    overflow: hidden;
                    padding: 0 25px;
                    position: relative;
                    text-align: center;
                    text-transform: none;
                    transform: translateZ(0);
                    transition: all .2s,box-shadow .08s ease-in;
                    user-select: none;
                    -webkit-user-select: none;
                    touch-action: manipulation;
                    width: 100%;
                }
                  
                .offline-button:disabled {
                    cursor: default;
                }
                  
                .offline-button:focus {
                    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
                }
            </style>
            <div class="offline-body">
                <h1 class="offline-h1">You are offline</h1>
                <p class="offline-p">Please check your internet connection and try again</p>
                <button class="offline-button" onclick="window.location.reload()">Reload</button>
            </div>
            `;
        }

        window.ononline = () => {
            window.location.reload();
        }
    }, []);

    return (
        <>
            <Head>
                <title>RestoreWhore</title>
                <meta name="keywords" content="restorecord, discord, backup, restore, backup service, savecord, letoa, restorebot, restorio, guildmergers, backup members, discord backup bot, discord backup, save discord members, restorewhore, restorecord clone, restorecord alternative" />
                <meta name="theme-color" content="#0a0a0a" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#0a0a0a" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content="RestoreWhore" />
                <meta name="application-name" content="RestoreWhore" />
                <link rel="canonical" href="https://restorewhore.com" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <TokenProvider>
                <CacheProvider value={emotionCache}>
                    <QueryClientProvider client={queryClient}>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </QueryClientProvider>
                </CacheProvider>
            </TokenProvider>
        </>
    );
}
