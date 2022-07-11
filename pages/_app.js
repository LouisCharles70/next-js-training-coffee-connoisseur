import '../styles/globals.css'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp
