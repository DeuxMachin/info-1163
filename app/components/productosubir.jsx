"use client";
import React from "react";
import styles from "./productosubir.module.css";


export function ProductPage() {
    return (

        <>
            <div className={styles.ContenedorSubir}>
                <div className={styles.InfoSubir}>
                    <h1 >Nombre de usuario</h1>
                    <img src="../usuario.png" alt="" />
                    <form name="subida-imagenes" type="POST" enctype="multipart/formdata" className={styles.formimagen} >
                        <input type="file" name="imagen1" />
                        <input type="submit" name="subir-imagen" value="Enviar imagen" />
                    </form>
                </div>
                <div className={styles.TextoSubir}>
                    <h2>Campos Obligatorios</h2>
                    <div className={styles.inputboxSubir}>
                        <input type="texto" name="email" required placeholder="" className={styles.input} />
                        <label htmlFor="">Titulo</label>
                    </div>
                    <div className={styles.inputboxSubir}>
                        <input type="texto" name="email" required placeholder="" className={styles.input} />
                        <label htmlFor="">Precio</label>
                    </div>
                    <div className={styles.inputboxSubir}>
                        <input type="texto" name="email" required placeholder="" className={styles.input} />
                        <label htmlFor="">Categoria</label>
                    </div>
                    <div className={styles.inputboxSubir}>
                        <input type="texto" name="email" required placeholder="" className={styles.input} />
                        <label htmlFor="">Estado del producto</label>
                    </div>
                </div>

                <div className={styles.Algo}>
                    <h2>Informacion opcional</h2>
                    <div className={styles.inputboxAlgo}>
                        <input type="texto" name="email" required placeholder="" className={styles.inputAlgo} />
                        <label htmlFor="">Estado del producto</label>
                    </div>
                    <div className={styles.inputboxAlgo}>
                        <input type="texto" name="email" required placeholder="" className={styles.inputAlgo} />
                        <label htmlFor="">Estado del producto</label>
                    </div>
                    <a href="../busqueda">
                        <button className={styles.buttonAlgo}>Subir producto</button>
                    </a>
                </div>
            </div>
            <h1 className={styles.Titulo}>Nombre del producto</h1>
            <div className={styles.InfoVenta}>
                <div className={styles.linea1} />
                <h1 className={styles.info}>Informacion del vendedor</h1>
                <img src="../usuario.png" alt="" />
                <p>Nombre del usuario</p>
                <div className={styles.linea2} />
                <div className={styles.texto}>
                    <h2 className={styles.precio}>Precio</h2>
                    <h4>Publicado hace</h4>

                </div>

                <div className={styles.texto2}>
                    <h2>Informacion producto</h2>
                    <ul>
                        <li>Disponibilidad del producto.</li>
                        <li>Categoría.</li>
                        <li>La descripción saldrá aca.</li>
                    </ul>
                </div>
                <div className={styles.ContenedorMapa}>
                    <div className={styles.Mapa}></div>
                    <h3>Ubicacion aproximada</h3>
                </div>
            </div>

            <div className={styles.FotoMain}></div>
            <div className={styles.Fotodos}></div>
            <div className={styles.Fototres}></div>
            <div className={styles.Fotocuatro}></div>
            <div className={styles.Fotocinco}></div>
            <div className={styles.Fotoseis}></div>

            <div className={styles.ContenedorSend}>
                <div className={styles.inputbox}>
                    <input type="texto" name="email" required placeholder="" className={styles.input} />
                    <label htmlFor="">Ingrese mensaje</label>
                </div>
                <button className={styles.button}>
                    <img src="/enviar.png" alt="" />
                </button>
            </div>

        </>

    )
}
export default ProductPage;
