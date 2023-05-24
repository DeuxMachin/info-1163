"use client";
import React from "react";
import Link from "next/link";
import styles from './navbar.module.css';

const links = [
    {
        label: 'Inicio',
        route: '/'
    },
    {
        label: 'Registrarse',
        route: '/register'
    },
    {
        label: 'Iniciar sesión',
        route: '/login'
    }
];

export function Navbar() {
    return (
        /*Hashearemos con class, esto se hace para contar con id privadas en los css y no topar con los globals */

        <nav className={styles.header}>
            <ul className={styles.navbar}>
                {links.map(({ label, route }) => (
                    <li key={route} className={styles.sex}>

                        <Link href={route}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>

    )
}
export default Navbar;
