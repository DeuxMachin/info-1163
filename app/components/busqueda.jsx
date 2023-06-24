"use client";
import React from "react";
import styles from './busqueda.module.css';

export function SearchSystem() {
    return (
        <>
            <div className={styles.containerleft}>
                <h1 className={styles.filtertitle}>Flitros</h1>
                <h1 className={styles.filterprice}>Precio</h1>
                <div className={styles.pricemincont}>
                    <h3 className={styles.h3}>Min</h3>
                </div>
                <div className={styles.pricemaxcont}>
                    <h3 className={styles.h3}>Max</h3>
                </div>
                <h1 className={styles.filterdate}>Fecha de publicación</h1>
                <div className={styles.datecont}>
                    <h3 className={styles.h3} >Fecha</h3>
                    <img className={styles.dropdownarrow} src="../dropdownarrow.png"></img>
                </div>
                <h1 className={styles.categorytitle}>Categorías</h1>
                <div className={styles.category1}>
                    <button className={styles.cat1}></button>
                    <h3 className={styles.conttextcat}>Lorem ipsum</h3>
                </div>
                <div className={styles.category2}>
                    <button className={styles.cat2}></button>
                    <h3 className={styles.conttextcat}>Lorem ipsum</h3>
                </div>
                <div className={styles.category3}>
                    <button className={styles.cat3}></button>
                    <h3 className={styles.conttextcat}>Lorem ipsum</h3>
                </div>
            </div>

            <h1 className={styles.searchres}>Resultados de la búsqueda</h1>
            <div className={styles.contpub1}>
                <a href="../producto">
                    <img className={styles.pubimg} src="../raptor.jpeg"></img>
                </a>
                <a className={styles.pubprice}>19.990.990$</a>
                <a className={styles.pubname}>Ford Raptor</a>
                <a className={styles.publocation}>Temuco, Araucanía</a>
            </div>
            <div className={styles.contpub2}>
                <a href="../producto">
                    <img className={styles.pubimg} src="../raptor.jpeg"></img>
                </a>
                <a className={styles.pubprice}>19.990.990$</a>
                <a className={styles.pubname}>Ford Raptor</a>
                <a className={styles.publocation}>Temuco, Araucanía</a>
            </div>
            <div className={styles.contpub3}>
                <a href="../producto">
                    <img className={styles.pubimg} src="../raptor.jpeg"></img>
                </a>
                <a className={styles.pubprice}>19.990.990$</a>
                <a className={styles.pubname}>Ford Raptor</a>
                <a className={styles.publocation}>Temuco, Araucanía</a>
            </div>
            <div className={styles.contpub4}>
                <a href="../producto">
                    <img className={styles.pubimg} src="../raptor.jpeg"></img>
                </a>
                <a className={styles.pubprice}>19.990.990$</a>
                <a className={styles.pubname}>Ford Raptor</a>
                <a className={styles.publocation}>Temuco, Araucanía</a>
            </div>
            <div className={styles.contpub5}>
                <a href="../producto">
                    <img className={styles.pubimg} src="../raptor.jpeg"></img>
                </a>
                <a className={styles.pubprice}>19.990.990$</a>
                <a className={styles.pubname}>Ford Raptor</a>
                <a className={styles.publocation}>Temuco, Araucanía</a>
            </div>
            <div className={styles.contpub6}>
                <a href="../producto">
                    <img className={styles.pubimg} src="../raptor.jpeg"></img>
                </a>
                <a className={styles.pubprice}>19.990.990$</a>
                <a className={styles.pubname}>Ford Raptor</a>
                <a className={styles.publocation}>Temuco, Araucanía</a>
            </div>
        </>
    )
}
export default SearchSystem;