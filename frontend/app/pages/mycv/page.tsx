"use client"
import { use, useEffect, useState } from "react"
import { useInfo } from "../../store/contextApi"
import Link from "next/link"
import GreenPart from "../../components/greenPart2"

export default function MyCV() {

    const { info, fetchCvDatas } = useInfo()


    useEffect(() => {
        fetchCvDatas()
    }, [])


    return (
        <div>
            <div className="h-[1400px] w-[1000px] border-gray-500 border-2 border-opacity-40  mx-auto my-8 p-8 ">

                <GreenPart />

                <div className="flex flex-row w-[100%] border-gray-500 border-2 border-opacity-40 h-[75%] ">
                    <div className='w-[30%]    p-4 '>
                        <div className="my-4 border-gray-500 border-2 border-opacity-20 p-4 ">
                            <p className=" text-2xl text-red-500 font-semibold pb-2">{info?.skills}</p>
                            <p>{info?.skillsInfo}</p>
                        </div>

                        <div className="my-4 border-gray-500 border-2 border-opacity-20 p-4 ">
                            <p  className=" text-2xl text-red-500 font-semibold pb-2">{info?.languages}</p>
                            <p>{info?.languagesInfo}</p>
                        </div>

                    </div>
                    <div className='w-[70%]   h-[90%] p-4' >
                        <div className='flex border-gray-500 border-2 border-opacity-20 flex-col p-4  my-4'>
                            <p className=" text-2xl text-red-500 font-semibold pb-2" >{info?.profile}</p>
                            <p>{info?.profileInfo}</p>

                        </div>
                        <div className='flex flex-col border-gray-500 border-2 border-opacity-20 p-4  my-4'>
                            <p className=" text-2xl text-red-500 font-semibold pb-2 " >{info?.projects}</p>
                            <p>{info?.projectsInfo}</p>

                        </div>

                        <div className='flex border-gray-500 border-2 border-opacity-20 flex-col p-4  my-4'>
                            <p className=" text-2xl text-red-500 font-semibold pb-2" >{info?.experience}</p>
                            <p>{info?.experienceInfo}</p>

                        </div>
                        <div className='flex border-gray-500 border-2 border-opacity-20 flex-col  p-4 my-4'>
                            <p className=" text-2xl text-red-500 font-semibold pb-2 " >{info?.education}</p>
                            <p>{info?.educationInfo}</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}