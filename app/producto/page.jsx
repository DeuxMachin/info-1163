"use client";
import React from "react";
import { ProductPage } from "../components/producto";
import { Navbar } from "../components/navbar";

export function Page() {
    return (
        <>
            <Navbar />
            <ProductPage />
        </>

    )
}
export default Page;