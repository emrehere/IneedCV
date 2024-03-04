"use client"
import { useEffect, useState } from 'react'
import { useInfo } from "../store/contextApi";

export default function GreenPart() {

    const { info } = useInfo();

  
  

    return (
        <div>
            <div className="bg-green-500 h-[25%] text-md flex flex-row ">
                <div className="w-[30%] px-8  flex items-center" >
                    <div className='rounded-xl'>
                        <img src={ info?.image} alt="Uploaded Image" className='h-80 object-cover mt-6 rounded-xl' />
                        
                        
                    </div>


                </div>
                <div className="w-[70%]  flex flex-col space-y-4 justify-center items-center" >
                    <p className="text-3xl font-semibold">{info?.name}</p>
                    <p className="text-3xl font-semibold">{info?.title}</p>                  
                    <div className="flex flex-row w-[50%] pt-8 font-semibold justify-between
                         items-center  text-gray-700">
                        <p className="mr-2">Phone Number: </p>
                        <p>{info?.phone}</p>
                       
                    </div>
                    <div className="flex flex-row w-[50%] text-gray-700 items-center font-semibold  justify-between">
                        <p className="mr-2">Email: </p>
                        <p>{info?.email}</p>
                    </div>
                    <div className="flex flex-row w-[50%] text-gray-700 items-center font-semibold  justify-between">
                        <p className="mr-2">City: </p>
                        <p>{info?.city}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}