"use client";
import React from "react";
import Link from "next/link";
import styles from './footer.module.css';


export function Footer() {
    return (
        /*Hashearemos con class, esto se hace para contar con id privadas en los css y no topar con los globals */
        <footer className={styles.pie}>

            <div className={styles.linea1} />
            <img src="../GmailIcon.png" className={styles.gmail} />
            <img src="../IgIcon.png" className={styles.ig} />
            <div className={styles.linea2} />

        </footer>

    )
}
export default Footer;
