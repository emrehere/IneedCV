"use client"
import { useEffect, useState } from "react"

export default function MyCV() {
    const [data, setData] = useState([]);


   function fetchCvDatas() {
        fetch('http://localhost:8000/mycv')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }

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