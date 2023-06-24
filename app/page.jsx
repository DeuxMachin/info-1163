import React from "react";
import styles from './components/home.module.css';
import { Navbar } from "./components/navbar";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className={styles.container1}>
                <div className={styles.cont}>
                    <img className={styles.user} src="../usuario.png" alt="Usuario" />
                    <h1 className={styles.namepro}>Producto</h1>
                    <p className={styles.text}>Loremp ipsum</p>
                </div>

            </div>
            <div className={styles.container2}>
                <p>Loremp impsunn</p>
            </div>
        </>
    );
}
