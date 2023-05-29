import React from "react";
import { Navbar } from "../components/navbar";

export default function LoginPage() {
    return (
        <>
        <Navbar />
        <section className="section-login">
            <div className="form-box">
                <form action="">
                    <h2 className="h2">Login</h2>
                    <div className="inputbox">
                        <img src="../correo-electronico.png" alt="#" className="icon" />
                        <input type="texto" name="password" required placeholder="" />
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="inputbox">
                        <img src="../candado.png" alt="#" className="icon" />
                        <input type="password" name="password" required placeholder="" />
                        <label htmlFor="">Password</label>
                    </div>
                    <div className="forget">
                        <label htmlFor="">
                            <input type="checkbox" />
                            Remember Me
                            <a href="#"> Forget</a>
                        </label>
                    </div>
                    <button>Log in</button>
                    <div className="register">
                        <p>No tengo una cuenta <a href="#">Registrar</a> </p>
                    </div>
                </form>
            </div>
        </section>
        </>

    )
}
