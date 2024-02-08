"use client"
import { useEffect } from "react"
import { useInfo } from "../store/contextApi" 
export default function MyCV() {

    const {info} = useInfo()

   
    return (
        <div>
            <h1>MyCV</h1>
            <p>{info}</p>
        </div>
    )
}