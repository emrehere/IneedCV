"use client"
import { useEffect, useState } from "react" 
import { useInfo } from "../store/contextApi"

export default function MyCV() {
    
    const { data, fetchCvDatas } = useInfo();

    useEffect(() => {
        fetchCvDatas()
    },[])
   
    console.log(data)

    return (
        <div>
            <h1>MyCV</h1>
        
        </div>
    )
}