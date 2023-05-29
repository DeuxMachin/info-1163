"use client";
import React from "react";
import styles from './messages.module.css';

export function MessageSystem() {
    return(
        <body className = {styles.page}>
            <div className = {styles.containermsg}>
                <img className = {styles.userpfp} src = "../usuario.png"></img>
                <a className = {styles.user}>Tú</a>
                <div className = {styles.msgback}>
                    <a className = {styles.msg}>Lorem ipsum</a>
                </div>
                <a className = {styles.date}>Fecha</a>
            </div>
            <div className = {styles.textcontainer}>
                <img className = {styles.clip} src = "../clip.png"></img>
                <img className = {styles.emoji} src = "../emoji.png"></img>
                <div className = {styles.msgwriting}>
                    <a className = {styles.msguser}>Insertar texto...</a>
                </div>
            </div>
        </body>
    )
}
export default MessageSystem;