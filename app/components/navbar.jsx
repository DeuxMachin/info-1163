import React from "react";
import Link from "next/link";
import styles from './navbar.module.css';


export function Navbar() {
    return (
        <header className={styles.header}>

            <a href="/" className={styles.Logo}>
                <Link href="/">
                    <img src="/logo.png" alt="Logo" className={styles.img} />
                </Link>
            </a>
            <div className={styles.nav_container}>
                <nav className={styles.navbar}>
                    <a href="/" className={styles.nav_link}>Inicio</a>
                    <a href="/register" className={styles.nav_link}>Registrar</a>
                    <a href="/login" className={styles.nav_link}>Login</a>
                </nav>
            </div>
        </header>
    )
}
export default Navbar;
