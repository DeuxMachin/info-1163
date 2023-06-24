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
                    <a href="/chat" className={styles.nav_link}>Mensajes</a>
                    <a href="/user" className={styles.nav_link}>Perfil</a>
                </nav>
            </div>
        </header>
    )
}
export default Navbar;
