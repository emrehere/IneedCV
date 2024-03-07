"use client"
import { useEffect, useState } from 'react'
import { useInfo } from "../store/contextApi";

export default function GreenPart() {

    const { info } = useInfo();

  
  

    return (
        <div>
            <div className=" h-[25%] text-md flex pb-4 flex-row border-gray-500 border-t-2 border-l-2 border-r-2 border-opacity-40">
                <div className="w-[40%] sm:w-[30%] sm:pl-12 pb-4  flex items-center" >
                    <div className='rounded-xl'>
                        <img src={ info?.image} alt="Uploaded Image" className='sm:h-80 object-cover mt-6 rounded-xl' />
                        
                        
                    </div>


                </div>
                <div className=" w-[60%] text-[10px] sm:text-base  flex flex-col sm:space-y-4 justify-center items-center" >
                    <p className="sm:text-3xl text-md font-semibold">{info?.name}</p>
                    <p className="sm:text-3xl text-md font-semibold ">{info?.title}</p>                  
                    <div className="flex flex-row w-[50%] pt-8 f justify-between
                         items-center  text-gray-700">
                        <p className="mr-2 flex">Phone&nbsp;<span className='hidden sm:flex'>Number: </span></p>
                        <p>{info?.phone}</p>
                       
                    </div>
                    <div className="flex flex-row w-[50%] text-gray-700 items-center   justify-between">
                        <p className="mr-2 ">Email: </p>
                        <p>{info?.email}</p>
                    </div>
                    <div className="flex flex-row w-[50%] text-gray-700 items-center   justify-between">
                        <p className="mr-2">City: </p>
                        <p>{info?.city}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}