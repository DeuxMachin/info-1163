"use client";
import React from "react";
import { Navbar } from "../components/navbar";
import styles from './register.module.css';


export function RegisterPage() {
    return (
        <> <Navbar />
            <main className={styles.SectioRegister} >
                <div className={styles.FormBox}>
                    <form action="" >
                        <h2 className={styles.h2}>Registrar</h2>
                        <div className={styles.inputbox}>
                            <img src="../usuario.png" alt="#" className={styles.icon} />
                            <input type="texto" name="password" required placeholder="" className={styles.input} />
                            <label htmlFor="">Nombre</label>
                        </div>

                        <div className={styles.inputbox}>
                            <img src="../correo-electronico.png" alt="#" className={styles.icon} />
                            <input type="texto" name="password" required placeholder="" className={styles.input} />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className={styles.inputbox}>
                            <img src="../ubicacion.png" alt="#" className={styles.icon} />
                            <input type="texto" name="password" required placeholder="" className={styles.input} />
                            <label htmlFor="">Region</label>
                        </div>
                        <div className={styles.inputbox}>
                            <img src="../ubicacion.png" alt="#" className={styles.icon} />
                            <input type="texto" name="password" required placeholder="" className={styles.input} />
                            <label htmlFor="">Comuna</label>
                        </div>
                        <div className={styles.inputbox}>
                            <img src="../celular.png" alt="#" className={styles.icon} />
                            <input type="numero" name="password" required placeholder="" className={styles.input} />
                            <label htmlFor="">Celular</label>
                        </div>
                        <div className={styles.inputbox}>
                            <img src="../candado.png" alt="#" className={styles.icon} />
                            <input type="password" name="password" required placeholder="" className={styles.input} />
                            <label htmlFor="">Contraseña</label>
                        </div>
                        <div className={styles.inputbox}>
                            <img src="../candado.png" alt="#" className={styles.icon} />
                            <input type="password" name="password" required placeholder="" className={styles.input} />
                            <label htmlFor="">Confirmar contraseña</label>
                        </div>


                        <button className={styles.button}>Register</button>

                        <div className={styles.register}>
                            <p>No tengo una cuenta <a href="#">Registrar</a> </p>
                        </div>
                    </form>
                </div>

            </main>
        </>
    )
}
export default RegisterPage;
