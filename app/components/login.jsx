"use client";
import React from "react";
import styles from './login.module.css';
import { Navbar } from "../components/navbar";
import Link from "next/link";

const links = [
    {
        label: 'Log In',
        route: '/chat'
    }

];

export function LoginPage() {
    return (
        <>
            <Navbar />
            <main className={styles.sectionlogin}>




                <div className={styles.formBox}>
                    <form action="">
                        <h2 className={styles.h2}>Login</h2>
                        <div className={styles.inputbox}>
                            <img src="../correo-electronico.png" alt="#" className={styles.icon} />
                            <input type="texto" name="email" required placeholder="" className={styles.input} />
                            <label htmlFor="">Email</label>
                        </div>
                        <div className={styles.inputbox}>
                            <img src="../candado.png" alt="#" className={styles.icon} />
                            <input type="password" name="password" required placeholder="" className={styles.input} />
                            <label htmlFor="">Password</label>
                        </div>
                        <div className={styles.forget}>
                            <label htmlFor="">
                                <input type="checkbox" className={styles.input} />
                                Remember Me
                                <a href="#"> Forget</a>
                            </label>
                        </div>
                        {links.map(({ label, route }) => (

                            <button className={styles.button}>

                                <Link href={route} className={styles.a}>
                                    {label}
                                </Link>
                            </button>

                        ))}
                        <div className={styles.register}>
                            <p>No tengo una cuenta <a href="#">Registrar</a> </p>
                        </div>
                    </form>
                </div>


            </main>
        </>
    )
}
export default LoginPage;
