import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import MuiLink from "@mui/material/Link";
import NavBar from "../components/landing/NavBar";
import Footer from "../components/landing/Footer";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Head from "next/head";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import AlertTitle from "@mui/material/AlertTitle";
import axios from "axios";
import LoadingButton from "../components/misc/LoadingButton";
import { makeXTrack } from "../src/getIPAddress";

export default function Login() {
    const router = useRouter();
    const captchaRef: any = useRef();

    const [captchaToken, setCaptchaToken] = useState("");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [openS, setOpenS] = useState(false);
    const [openE, setOpenE] = useState(false);
    const [notiTextS, setNotiTextS] = useState("X");
    const [notiTextE, setNotiTextE] = useState("X");

    useEffect(() => {
        try {
        }
        catch (err) {
            console.error(err);
        }
    }, [email, router, captchaToken]);

    return (
        <>
            <Box sx={{ minHeight: "100vh", flexDirection: "column", display: "flex", pt: "2.5rem" }}>
                <Head>
                    <meta name="description" content="RestoreWhore is a Recovery Service, it can Backup and Restore your Servers Members, Channels, Categories, Roles and much more" />
                    <meta property="og:description" content="RestoreWhore is a Recovery Service, it can Backup and Restore your Servers Members, Channels, Categories, Roles and do much more" />
                    <meta property="og:title" content="RestoreWhore - Login" />
                </Head>

                <Container maxWidth="lg" sx={{ mx: "auto", justifyContent: "center", alignItems: "center" }}>

                    <NavBar />

                    <Snackbar open={openE} autoHideDuration={3000} onClose={(event?: React.SyntheticEvent | Event, reason?: string) => { if (reason === "clickaway") { return; } setOpenE(false); }} anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                        <Alert elevation={6} variant="filled" severity="error">
                            {notiTextE}
                        </Alert>
                    </Snackbar>

                    <Snackbar open={openS} autoHideDuration={3000} onClose={(event?: React.SyntheticEvent | Event, reason?: string) => { if (reason === "clickaway") { return; } setOpenS(false); }} anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                        <Alert elevation={6} variant="filled" severity="success">
                            {notiTextS}
                        </Alert>
                    </Snackbar>

                    <Box sx={{ width: "100%", maxWidth: "500px", mx: "auto", mt: "3rem" }}>
                        <Typography variant="h4" component="h1" align="center" sx={{ fontWeight: "bold" }} gutterBottom>
                            Forgot Password
                        </Typography>

                        
                        <Alert severity="info" sx={{ borderRadius: "1rem", padding: "0.5rem", marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                            <AlertTitle>{`We only sell your data, we don't help you recover it :/`}</AlertTitle>
                            <Typography>{`The restorecord experience, all your data sold. That's why you use VaultCord instead`} <Link href={`https://vaultcord.com`}>https://vaultcord.com</Link></Typography>
                        </Alert>
                    </Box>
                </Container>
            </Box>
        </>
    )
}