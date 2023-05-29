"use client";
import { Navbar } from "../components/navbar";
import React from "react";

export default function RegisterPage() {
    return (
        <>
        <Navbar />

        <article className="section-register">
            <div className="form-box-register">
                <form action="">
                    <h2 className="h2-register">Registrar</h2>
                    <div className="inputbox-register">
                        <img src="../usuario.png" alt="#" className="icon-register" />
                        <input type="texto" name="password" required placeholder="" />
                        <label htmlFor="">Nombre</label>
                    </div>

                    <div className="inputbox-register">
                        <img src="../correo-electronico.png" alt="#" className="icon-register" />
                        <input type="texto" name="password" required placeholder="" />
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="inputbox-register">
                        <img src="../ubicacion.png" alt="#" className="icon-register" />
                        <input type="texto" name="password" required placeholder="" />
                        <label htmlFor="">Region</label>
                    </div>
                    <div className="inputbox-register">
                        <img src="../ubicacion.png" alt="#" className="icon-register" />
                        <input type="texto" name="password" required placeholder="" />
                        <label htmlFor="">Comuna</label>
                    </div>
                    <div className="inputbox-register">
                        <img src="../celular.png" alt="#" className="icon-register" />
                        <input type="numero" name="password" required placeholder="" />
                        <label htmlFor="">Celular</label>
                    </div>
                    <div className="inputbox-register">
                        <img src="../candado.png" alt="#" className="icon-register" />
                        <input type="password" name="password" required placeholder="" />
                        <label htmlFor="">Contraseña</label>
                    </div>
                    <div className="inputbox-register">
                        <img src="../candado.png" alt="#" className="icon-register" />
                        <input type="password" name="password" required placeholder="" />
                        <label htmlFor="">Confirmar contraseña</label>
                    </div>

                    <div className="forget-register">
                        <label htmlFor="">
                            <input type="checkbox" />
                            Remember Me
                            <a href="#"> Forget</a>
                        </label>
                    </div>
                    <button>Log in</button>
                    <div className="register-register">
                        <p>No tengo una cuenta <a href="#">Registrar</a> </p>
                    </div>
                </form>
            </div>
        </article>

        </>

    )
}