"use client";
import React from "react";
import Link from "next/link";

<script src="https://kit.fontawesome.com/eb496ab1a0.js" ></script>



export function Footer() {
    return (
        /*Hashearemos con class, esto se hace para contar con id privadas en los css y no topar con los globals */
        <div className="piepagina bg-blue-900">

            <div className="grupo2 py-4 px-2 text-center text-white">
                <small className="text-sm">&copy; 2023 <b>D.A.L.E.S</b> - Todos los Derechos Reservados.</small>
            </div>
        </div>

    )
}
export default Footer;
