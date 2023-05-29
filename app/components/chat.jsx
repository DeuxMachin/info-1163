"use client";
import React from "react";
import styles from './chat.module.css';

export function ChatPage() {
    return(
        <>
        <div className = {styles.container}>
            <a className = {styles.filldiv} href="../messages"></a>
            <img className = {styles.user} src = "../usuario.png"></img>
            <a href="../messages">
                <h1 className = {styles.title}>Nombre ~ Nombre producto</h1>
                <a className = {styles.lastmsg} href="../messages">Nombre comprador: Último mensaje</a>
                <a className = {styles.date} href="../messages">Fecha</a>
                <img className = {styles.online} src = "../circuloverde.png"></img>
            </a>
        </div>
        <div className = {styles.container2}>
            <a className = {styles.filldiv} href="../messages"></a>
            <img className = {styles.user} src = "../usuario.png"></img>
            <a href="../messages">
                <h1 className = {styles.title}>Nombre ~ Nombre producto</h1>
                <a className = {styles.lastmsg} href="../messages">Nombre comprador: Último mensaje</a>
                <a className = {styles.date} href="../messages">Fecha</a>
                <img className = {styles.online} src = "../circulorojo.png"></img>
            </a>
        </div>
        </>
    )
}
export default ChatPage;