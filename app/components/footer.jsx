"use client";
import React from "react";
import Link from "next/link";
import styles from './footer.module.css';
<script src="https://kit.fontawesome.com/eb496ab1a0.js" crossorigin="anonymous"></script>



export function Footer() {
    return (
        /*Hashearemos con class, esto se hace para contar con id privadas en los css y no topar con los globals */
        <div className={styles.piepagina}>

            <div className={styles.grupo2}>
                <small>&copy; 2023 <b>D.A.L.E.S</b> - Todos los Derechos Reservados.</small>
            </div>
        </div>

    )
}
export default Footer;
