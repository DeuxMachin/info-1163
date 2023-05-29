"use client";
import React from "react";
import styles from './user.module.css';

export function UserPage() {
    return(
        <>
        <div className = {styles.usercontainer}>
            <img className = {styles.user} src = "../usuario.png"></img>
            <div className = {styles.namecontainer}>
                <a className = {styles.insidetext}>Nombre de usuario</a>
            </div>
            <div className = {styles.emailcontainer}>
                <a className = {styles.insidetext}>Email</a>
            </div>
            <div className = {styles.phonecontainer}>
                <a className = {styles.insidetext}>Teléfono</a>
            </div>
            <div className = {styles.regioncontainer}>
                <a className = {styles.insidetext}>Región</a>
            </div>
            <div className = {styles.citycontainer}>
                <a className = {styles.insidetext}>Comuna</a>
            </div>
            <div className = {styles.gendercontainer}>
                <a className = {styles.insidetext}>Género</a>
            </div>
            <div className = {styles.changecontainer}>
                <a className = {styles.insidetextchange}>Cambiar datos</a>
            </div>
            <div className = {styles.changecontainer2}>
                <a className = {styles.insidetextchange2}>Cambiar contraseña</a>
            </div>
        </div>

        <div className = {styles.extracontainer}>
            <div className = {styles.registerdatecont}>
                <a className = {styles.insidetext}>Fecha de registro</a>
            </div>
            <div className = {styles.verifiedmailcont}>
                <a className = {styles.insidetext}>Correo verificado</a>
            </div>
        </div>

        <h1 className = {styles.titletext}>Publicaciones</h1>
        <div className = {styles.postcontainer}>
            <img className = {styles.leftarrow} src = "../arrow.png"></img>
            <img className = {styles.post1} src = "../pcgamer.jpg"></img>
            <img className = {styles.post1edit} src = "../lapiz.png"></img>
            <img className = {styles.post1del} src = "../basurero.png"></img>
            <a className = {styles.post1text}>PC Gamer</a>
            <img className = {styles.rightarrow} src = "../arrow.png"></img>
        </div>
        </>
    )
}
export default UserPage;