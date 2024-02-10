"use client"
import { useEffect, useState } from "react" 
import { useInfo } from "../store/contextApi"
import Link from "next/link"

export default function MyCV() {

    const { info } = useInfo();
    



    return (
        <div>
            <Link href={"/templates"}>Go back</Link>
            <h1>MyCV</h1>
        <h2>{info?.name}</h2>
        <img src={info?.image} />
        <p>{info?.title}</p>
        </div>
    )
}