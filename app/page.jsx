"use client";
import React from "react";
import '../styles/globals.css'
import { Navbar } from "./components/navbar";

export default function HomePage() {
    return (

        <>
        <Navbar />
            <section>
                <div className="Contenedor-Main">
                    <h3 className="Titulo-Destacado">Nombre del Producto</h3>
                    <div className="imagen-circular"></div>
                </div>
                <div className="Contenedor-Destacado">

                    <img src="./hutao.png" className="Imagen1" alt="Imagen Venta" />
                    <h3 className="Texto1">Este es el titulo 1</h3>

                    <img src="./raiden.png" className="Imagen2" alt="Imagen Venta" />
                    <h3 className="Texto2">Este es el titulo 2</h3>

                    <img src="./kequin.png" className="Imagen3" alt="Imagen Venta" />
                    <h3 className="Texto3">Este es el titulo 3</h3>

                </div>
            </section>

        </>



    )
}