import Footer from "../components/landing/Footer";
import NavBar from "../components/landing/NavBar";
import SubscriptionList from "../src/SubscriptionList";
import theme from "../src/theme";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Badge from "@mui/material/Badge";
import Head from "next/head";
import AOS from "aos";
import Typed from "typed.js";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CheckCircleOutlineRounded from "@mui/icons-material/CheckCircleOutlineRounded";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";


export default function Home() {
    const typingElement: any = useRef(null);
    const typed: any = useRef(null);

    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallDesktop = useMediaQuery(theme.breakpoints.down("lg"));
  
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
        });

        const options = {
            strings: [
                "worst",
                "best GDPR-violating",
                "slowest",
                "buggiest",
            ],
            typeSpeed: 90,
            backSpeed: 90,
            loop: true,
        };
      
        typed.current = new Typed(typingElement.current, options);
      
        return () => {
            typed.current.destroy();
        }
    }, [])

    return (
        <>
            <Box sx={{ minHeight: "100vh", flexDirection: "column", display: "flex", pt: "2.5rem" }}>
                <Head>
                    <meta name="description" content="RestoreWhore is a Recovery Service, it can Backup and Restore your Servers Members, Channels, Categories, Roles and much more (but it wont ever work)" />
                    <meta property="og:description" content="RestoreWhore is a Recovery Service, it can Backup and Restore your Servers Members, Channels, Categories, Roles and do much more" />
                    <meta property="og:title" content="RestoreWhore - The Recovery Service" />
                </Head>

                <Container maxWidth="xl" sx={{ mx: "auto", justifyContent: "center", alignItems: "center" }}>
                    <NavBar />

                    <Box sx={{ my: 4, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} data-aos="zoom-in-down">
                            <Typography data-aos="fade-down" variant="h1" component="h1" sx={{ fontWeight: 900, textAlign: "center", fontSize: { xs: "1.5rem", md: "2.5rem", lg: "3.5rem" },  padding: 0, paddingLeft: { xs: "4px", sm: "40px" }, paddingRight: { xs: "4px", sm: "40px" } }}>
                                The <span style={{ color: "#6c63ff" }} ref={typingElement}></span> way to<br/>backup your Discord servers.
                            </Typography>

                            <Typography data-aos="fade-down" color={theme.palette.grey[200]} variant="h5" component="h2" sx={{ fontWeight: 300, textAlign: "center", padding: 4, paddingLeft: { xs: "2rem", sm: "4rem", md: "12rem",  }, paddingRight: { xs: "2rem", sm: "4rem", md: "12rem" } }}>
                                Backup your Discord server with RestoreWhore
                            </Typography>

                            <Badge data-aos="fade-down" badgeContent={<>FOR FREE</>} color="success" sx={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", [`& .MuiBadge-badge`]: { backgroundColor: "rgb(52, 168, 83)", color: "#2b2b2b" } }}>
                                <Button variant="contained" color="primary" href="/login" size="large">
                                    Get Started
                                </Button>
                            </Badge>
                        </Box>

                        <Box sx={{ display: { xs: "none", md: "flex" } , justifyContent: "center", alignItems: "center", flexDirection: "column", mt: 10 }} data-aos="zoom-in-up">
                            <Image src="https://restorewhore.com/dashboard_mu.png" alt="Dashboard" width={Number(isMobile ? 600 : isSmallDesktop ? 800 : 1251)} height={Number(isMobile ? 369 : isSmallDesktop ? 492 : 769)} />
                        </Box>

                        <Box id="features" sx={{ marginTop: 4 }} />

                        <Card sx={{ width: "100%", height: "auto", display: "block", borderRadius: 12 }} data-aos="zoom-in-down">
                            <Box sx={{ display: "flex", justifyContent: "flex-start", padding: "36px 50px", alignItems: "center" }}>
                                <Box>
                                    <Typography sx={{ fontStyle: "normal", fontWeight: 500, fontSize: { sm: 10, md: 20, }, textTransform: "uppercase", color: theme.palette.text.primary, marginTop: 2 }}>
                                        Backup (barely works)
                                    </Typography>

                                    <Typography sx={{ fontStyle: "normal", fontWeight: 700, fontSize: { xs: 24, sm: 32, md: 48 }, color: theme.palette.text.primary, marginTop: "10px", marginBottom: "27px" }}>
                                        Instant Server Backups
                                    </Typography>

                                    <Typography sx={{ fontStyle: "normal", fontWeight: 400, fontSize: { sm: 10, md: 20 }, color: theme.palette.text.primary, marginBottom: 2, display: "flex", alignItems: "center" }}>
                                        <CheckCircleOutlineRounded sx={{ color: theme.palette.success.main, mr: 1 }} />
                                        Save your Servers Members, Channels, Roles & more with a single click
                                    </Typography>

                                    <Typography sx={{ fontStyle: "normal", fontWeight: 400, fontSize: { sm: 10, md: 20 }, color: theme.palette.text.primary, marginBottom: 2, display: "flex", alignItems: "center" }}>
                                        <CheckCircleOutlineRounded sx={{ color: theme.palette.success.main, mr: 1 }} />
                                        Backup your Members and Restore them in minutes (minutes? more like hours)
                                    </Typography>

                                    <Typography sx={{ fontStyle: "normal", fontWeight: 400, fontSize: { sm: 10, md: 20 }, color: theme.palette.text.primary, marginBottom: 2, display: "flex", alignItems: "center" }}>
                                        <CheckCircleOutlineRounded sx={{ color: theme.palette.success.main, mr: 1 }} />
                                        Restore everything within seconds (read point above)
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>

                        <Box sx={{ marginTop: { xs: 5, md: 10 }, display: { sm: "block", md: "flex" }, flexDirection: { sm: "column", md: "row" }, justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ width: "100%", marginBottom: { xs: 5, md: 0 }, backgroundColor: theme.palette.primary.main, borderRadius: 8, border: `1px solid ${theme.palette.primary.dark}` }} data-aos="zoom-in-right">
                                <Box sx={{ py: 10, px: 6 }}>
                                    <Typography sx={{ fontStyle: "normal", fontWeight: 900, fontSize: { sm: 24, md: 48 }, color: theme.palette.text.primary }}>
                                        Backup & Restore your<br/>Server Members
                                    </Typography>

                                    <Typography sx={{ fontStyle: "normal", fontWeight: 500, fontSize: { sm: 10, md: 20 }, color: theme.palette.text.primary, marginTop: "5px" }}>
                                    RestoreWhore allows you to backup your server members and restore them in just minutes.
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ marginLeft: { sm: 0, md: 12 }, marginTop: { xs: 5, md: 0 }, width: "100%", backgroundColor: theme.palette.primary.main, borderRadius: 8, border: `1px solid ${theme.palette.primary.dark}` }} data-aos="zoom-in-left">
                                <Box sx={{ py: 10, px: 6 }}>
                                    <Typography sx={{ fontStyle: "normal", fontWeight: 900, fontSize: { sm: 24, md: 48 }, color: theme.palette.text.primary }}>
                                        Customizable<br/>Verification Page
                                    </Typography>

                                    <Typography sx={{ fontStyle: "normal", fontWeight: 500, fontSize: { sm: 10, md: 20 }, color: theme.palette.text.primary, marginTop: "5px" }}>
                                        We offer the most customizable verification page. You can customize the page to your liking.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Card sx={{ width: "100%", height: "auto", display: "block", borderRadius: 12,  marginTop: 5 }} data-aos="zoom-in-up">
                            <Box sx={{ display: "flex", justifyContent: "flex-start", padding: "36px 50px", alignItems: "center" }}>
                                <Box>
                                    <Typography sx={{ fontStyle: "normal", fontWeight: 500, fontSize: { sm: 10, md: 20 }, textTransform: "uppercase", color: theme.palette.text.primary, marginTop: 2 }}>
                                        Security
                                    </Typography>

                                    <Typography sx={{ fontStyle: "normal", fontWeight: 700, fontSize: { xs: 24, sm: 32, md: 48 }, color: theme.palette.text.primary, marginTop: "10px", marginBottom: "27px" }}>
                                        Insecure & Unreliable
                                    </Typography>

                                    <Typography sx={{ fontStyle: "normal", fontWeight: 400, fontSize: { sm: 10, md: 20 }, color: theme.palette.text.primary, marginBottom: 2, display: "flex", alignItems: "center" }}>
                                        <CheckCircleOutlineRounded sx={{ color: theme.palette.success.main, mr: 1 }} />
                                        RestoreCord sells your data
                                    </Typography>

                                    <Typography sx={{ fontStyle: "normal", fontWeight: 400, fontSize: { sm: 10, md: 20 }, color: theme.palette.text.primary, marginBottom: 2, display: "flex", alignItems: "center" }}>
                                        <CheckCircleOutlineRounded sx={{ color: theme.palette.success.main, mr: 1 }} />
                                        RestoreCord gets hacked often
                                    </Typography>

                                    <Typography sx={{ fontStyle: "normal", fontWeight: 400, fontSize: { sm: 10, md: 20 }, color: theme.palette.text.primary, marginBottom: 2, display: "flex", alignItems: "center" }}>
                                        <CheckCircleOutlineRounded sx={{ color: theme.palette.success.main, mr: 1 }} />
                                        RestoreCord Support is slow & unprofessional
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>


                        <Box id="reviews" sx={{ marginTop: 8 }}/>

                        <Box>
                            <Typography variant="h6" sx={{ fontStyle: "normal", fontWeight: 900, fontSize: { sm: 19, md: 38 }, textAlign: "center", color: theme.palette.text.primary, my: 4, mx: 2, mt: 10 }}>
                                What our customers say
                            </Typography>

                            <Typography variant="body1" sx={{ fontStyle: "normal", fontWeight: 400, fontSize: { sm: 10, md: 20 }, textAlign: "center", color: theme.palette.text.primary, my: 4, mx: 2, wordWrap: "break-word" }}>
                                We are proud to have helped thousands of businesses grow their sales and increase their revenue.
                            </Typography>


                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 5 }}>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", mx: 2 }}>
                                    <Card sx={{ width: "100%", maxWidth: 600, height: "auto", display: "block", borderRadius: 12, marginTop: 5 }} data-aos="zoom-in">
                                        <Box sx={{ display: "flex", justifyContent: "center", padding: "36px 50px", alignItems: "center", flexDirection: "row" }}>
                                            <Avatar sx={{ width: 80, height: 80, background: theme.palette.primary.main, color: theme.palette.getContrastText(theme.palette.primary.main), fontSize: 24, fontWeight: 900 }}>I</Avatar>
                                            <Box sx={{ marginLeft: "20px" }}>
                                                <Typography sx={{ fontStyle: "normal", fontWeight: 700, fontSize: 24, color: theme.palette.text.primary, marginTop: 2 }}>
                                                    Imran
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", mb: 4 }}>
                                            <Image src="https://restorewhore.com/stars-5.svg" alt="5 stars" width={128} height={24} />
                                        </Box>

                                        <Typography sx={{ fontStyle: "normal", fontWeight: 300, fontSize: 20, color: theme.palette.text.primary, marginTop: 1, textAlign: "center",  padding: { xs: "0px 12px", sm: "0px 25px", md: "0px 50px" }, marginBottom: 2 }}>
                                            This was soo good this bot is the best and the support are just amazing answering all the questions you have and always have the best replies YALL SHOULD DEFINITELY USE THIS BOT
                                        </Typography>
                                    </Card>
                                    <Card sx={{ width: "100%", maxWidth: 600, height: "auto", display: "block", borderRadius: 12, marginTop: 5, mx: 2 }} data-aos="zoom-in">
                                        <Box sx={{ display: "flex", justifyContent: "center", padding: "36px 50px", alignItems: "center", flexDirection: "row" }}>
                                            <Avatar sx={{ width: 80, height: 80, background: theme.palette.primary.main, color: theme.palette.getContrastText(theme.palette.primary.main), fontSize: 24, fontWeight: 900 }}>MZ</Avatar>
                                            <Box sx={{ marginLeft: "20px" }}>
                                                <Typography sx={{ fontStyle: "normal", fontWeight: 700, fontSize: 24, color: theme.palette.text.primary, marginTop: 2 }}>
                                                    Maik
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", mb: 4 }}>
                                            <Image src="https://restorewhore.com/stars-5.svg" alt="5 stars" width={128} height={24} />
                                        </Box>

                                        <Typography sx={{ fontStyle: "normal", fontWeight: 300, fontSize: 20, color: theme.palette.text.primary, marginTop: 2, textAlign: "center",  padding: { xs: "0px 12px", sm: "0px 25px", md: "0px 50px" }, marginBottom: 2 }}>
                                            Amazing and very fast customer support, the owner answers in a few Seconds/minutes and takes his time to solve my problem. Great product, working 100% as advertised.
                                        </Typography>
                                    </Card>
                                </Box>
                                <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", alignItems: "center", flexDirection: "column", mx: 2 }}>
                                    <Card sx={{ width: "100%", maxWidth: 600, height: "auto", display: "block", borderRadius: 12, marginTop: 5, mx: 2 }} data-aos="zoom-in">
                                        <Box sx={{ display: "flex", justifyContent: "center", padding: "36px 50px", alignItems: "center", flexDirection: "row" }}>
                                            <Avatar sx={{ width: 80, height: 80, background: theme.palette.primary.main, color: theme.palette.getContrastText(theme.palette.primary.main), fontSize: 24, fontWeight: 900 }}>M</Avatar>
                                            <Box sx={{ marginLeft: "20px" }}>
                                                <Typography sx={{ fontStyle: "normal", fontWeight: 700, fontSize: 24, color: theme.palette.text.primary, marginTop: 2 }}>
                                                    modxgta.com
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", mb: 4 }}>
                                            <Image src="https://restorewhore.com/stars-5.svg" alt="5 stars" width={128} height={24} />
                                        </Box>

                                        <Typography sx={{ fontStyle: "normal", fontWeight: 300, fontSize: 20, color: theme.palette.text.primary, marginTop: 2, textAlign: "center",  padding: { xs: "0px 12px", sm: "0px 25px", md: "0px 50px" }, marginBottom: 2 }}>
                                            Terrible and very slow customer support, the owner answers in like 4 hours and takes his time to solve my problem. Terrible product, I think I was scammed.
                                        </Typography>
                                    </Card>
                                    <Card sx={{ width: "100%", maxWidth: 600, height: "auto", display: "block", borderRadius: 12, marginTop: 5 }} data-aos="zoom-in">
                                        <Box sx={{ display: "flex", justifyContent: "center", padding: "36px 50px", alignItems: "center", flexDirection: "row" }}>
                                            <Avatar sx={{ width: 80, height: 80, background: theme.palette.primary.main, color: theme.palette.getContrastText(theme.palette.primary.main), fontSize: 24, fontWeight: 900 }}>K</Avatar>
                                            <Box sx={{ marginLeft: "20px" }}>
                                                <Typography sx={{ fontStyle: "normal", fontWeight: 700, fontSize: 24, color: theme.palette.text.primary, marginTop: 2 }}>
                                                    Katy
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", mb: 4 }}>
                                            <Image src="https://restorewhore.com/stars-5.svg" alt="5 stars" width={128} height={24} />
                                        </Box>

                                        <Typography sx={{ fontStyle: "normal", fontWeight: 300, fontSize: 20, color: theme.palette.text.primary, marginTop: 2, textAlign: "center",  padding: { xs: "0px 12px", sm: "0px 25px", md: "0px 50px" }, marginBottom: 2 }}>                                       
                                            I Used restorecord for a year, had a terrible experience.  I recommend VaultCord as a solid backup bot. Theyre found at https://vaultcord.com
                                            
                                        </Typography>
                                    </Card>
                                </Box>
                                <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", alignItems: "center", flexDirection: "column", mx: 2 }}>
                                    <Card sx={{ width: "100%", maxWidth: 600, height: "auto", display: "block", borderRadius: 12, marginTop: 5 }} data-aos="zoom-in">
                                        <Box sx={{ display: "flex", justifyContent: "center", padding: "36px 50px", alignItems: "center", flexDirection: "row" }}>
                                            <Avatar sx={{ width: 80, height: 80, background: theme.palette.primary.main, color: theme.palette.getContrastText(theme.palette.primary.main), fontSize: 24, fontWeight: 900 }}>DM</Avatar>
                                            <Box sx={{ marginLeft: "20px" }}>
                                                <Typography sx={{ fontStyle: "normal", fontWeight: 700, fontSize: 24, color: theme.palette.text.primary, marginTop: 2 }}>
                                                    Daniel
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", mb: 4 }}>
                                            <Image src="https://restorewhore.com/stars-5.svg" alt="5 stars" width={128} height={24} />
                                        </Box>

                                        <Typography sx={{ fontStyle: "normal", fontWeight: 300, fontSize: 20, color: theme.palette.text.primary, marginTop: 2, textAlign: "center",  padding: { xs: "0px 12px", sm: "0px 25px", md: "0px 50px" }, marginBottom: 2 }}>
                                            This is the worst $hit let me tell you. This has let me down  countless times no review I could leave on this trust pilot bull$hitz could describe how terrible this damn bot is NONE! Its like one sec discord takes everything from you then boom! After 5 hours and 3 support tickets, its back!
                                        </Typography>
                                    </Card>
                                    <Card sx={{ width: "100%", maxWidth: 600, height: "auto", display: "block", borderRadius: 12, marginTop: 5, mx: 2 }} data-aos="zoom-in">
                                        <Box sx={{ display: "flex", justifyContent: "center", padding: "36px 50px", alignItems: "center", flexDirection: "row" }}>
                                            <Avatar sx={{ width: 80, height: 80, background: theme.palette.primary.main, color: theme.palette.getContrastText(theme.palette.primary.main), fontSize: 24, fontWeight: 900 }}>AS</Avatar>
                                            <Box sx={{ marginLeft: "20px" }}>
                                                <Typography sx={{ fontStyle: "normal", fontWeight: 700, fontSize: 24, color: theme.palette.text.primary, marginTop: 2 }}>
                                                    astral
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", mb: 4 }}>
                                            <Image src="https://restorewhore.com/stars-5.svg" alt="5 stars" width={128} height={24} />
                                        </Box>

                                        <Typography sx={{ fontStyle: "normal", fontWeight: 300, fontSize: 20, color: theme.palette.text.primary, marginTop: 2, textAlign: "center",  padding: { xs: "0px 12px", sm: "0px 25px", md: "0px 50px" }, marginBottom: 2 }}>
                                            Had a bad experience with restorecord support is super slow and fixes issues in several hours
                                        </Typography>
                                    </Card>
                                </Box>
                            </Box>
                            </Box>
                            </Box>
                </Container>
                <div style={{ marginBottom: "5rem" }} />
                <Footer />
            </Box>
        </>
    );
}