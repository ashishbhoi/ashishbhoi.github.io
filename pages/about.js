import styles from "../styles/Home.module.css";
import Head from "next/head";
import Navbar from "./Navbar";

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About | Ashish Kumar Bhoi</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {Navbar("About")}
            <main className={styles.main}>
                <h1 className={styles.title}>
                    About Page
                </h1>
            </main>
        </div>
    )
}