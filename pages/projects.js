import styles from "../styles/Home.module.css";
import Head from "next/head";
import Navbar from "./Navbar";

export default function Projects() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Projects | Ashish Kumar Bhoi</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {Navbar("Projects")}
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Projects Page
                </h1>
            </main>
        </div>
    )
}