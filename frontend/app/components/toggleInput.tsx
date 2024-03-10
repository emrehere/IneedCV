import React, { useState } from 'react'
import { useInfo } from '../store/contextApi'

function ToggleInput() {

    const { inputType, setInputType, toggleInputType } = useInfo()


    

    return (
        <div>
            <p onClick={toggleInputType} className={`absolute 
                ${inputType === "password" ? "bg-blue-950" : "bg-white border-4 border-blue-950 border-opacity-50 "}
                h-4 w-4 rounded-full -ml-6 -mt-2 cursor-pointer ` }> 
             </p>
        </div>
    )
}

export default ToggleInput
