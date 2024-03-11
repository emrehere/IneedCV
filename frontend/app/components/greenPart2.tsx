"use client"
import { useEffect, useState } from 'react'
import { useInfo } from "../store/contextApi";
import Image from "next/image";

export default function GreenPart() {

    const { info } = useInfo();

  
  

    return (
        <div>
            <div className=" text-md flex pb-4 flex-row border-gray-500 border-t-2 border-l-2 border-r-2 border-opacity-40">
                <div className="w-[40%] sm:w-[30%] sm:pl-12   flex items-center" >
                    <div className='rounded-xl'>
                    <Image height={120} width={120} src={ info?.image} alt="Uploaded Image" className=' object-cover mt-2 rounded-xl' />
                        
                        
                    </div>


                </div>
                <div className=" w-[60%] text-[10px] sm:text-[14px]  flex flex-col sm:space-y-1 justify-center items-center" >
                    <p className="sm:text-xl mt-1 text-md font-bold text-red-500 ">{info?.name}</p>
                    <p className="sm:text-xl text-md font-bold text-red-500 ">{info?.title}</p>                  
                    <div className="flex flex-row w-[70%] pt-2 f justify-between
                         items-center  text-gray-700">
                        <p className="mr-2 flex">Phone&nbsp;<span className='hidden sm:flex'>Number: </span></p>
                        <p>{info?.phone}</p>
                       
                    </div>
                    <div className="flex flex-row w-[70%] text-gray-700 items-center   justify-between">
                        <p className="mr-2 ">Email: </p>
                        <p>{info?.email}</p>
                    </div>
                    <div className="flex flex-row w-[70%] text-gray-700 items-center   justify-between">
                        <p className="mr-2">City: </p>
                        <p>{info?.city}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}