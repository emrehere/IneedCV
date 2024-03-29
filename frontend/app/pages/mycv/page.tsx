"use client"
import { use, useEffect, useState, useRef } from "react"
import { useInfo } from "../../store/contextApi"
import GreenPart from "../../components/greenPart2"
import { useReactToPrint } from 'react-to-print';
import { RefObject } from 'react';
import RedButtons from "@/app/components/RedButtons"
import { useRouter } from "next/navigation"



type MyCVProps = {
    componentRef: RefObject<HTMLDivElement>;
}

function MyCV({ componentRef }: MyCVProps) {

    const { info, fetchCvDatas, token, setToken } = useInfo()
  

    const router = useRouter()

    useEffect(() => {

        const mytoken = localStorage.getItem('token') ?? '';
        console.log(mytoken)
        console.log("token checked")
        setToken(mytoken)
        if (!mytoken) {
            router.push('/')
        }

    }, [router, token])


    useEffect(() => {
        fetchCvDatas()
    }, [])




    return (
        <div className=" bg-[#070717] h-full w-[100vw] ">
            {
                token && (
                    <div className="pt-12 pb-4 overflow-x-hidden">
                        <div ref={componentRef} className=" sm:h-[1050px] 
                        w-[280px] sm:w-[820px] bg-white  mx-auto  sm:p-2 ">

                            <GreenPart />

                            <div className="flex flex-row w-[100%]  text-[5px] sm:text-[14px]  border-gray-500 border-2 border-opacity-40  ">
                                <div className='sm:w-[30%] w-[40%]  p-1 sm:p-2 '>
                                    <div className="my-2 border-gray-500 border-2 border-opacity-20 p-2 ">
                                        <p className=" sm:text-xl text-red-500 font-semibold ">{info?.skills}</p>
                                        <p>{info?.skillsInfo}</p>
                                    </div>

                                    <div className="my-2 border-gray-500 border-2 border-opacity-20 p-2 ">
                                        <p className=" sm:text-xl text-red-500 font-semibold ">{info?.languages}</p>
                                        <p>{info?.languagesInfo}</p>
                                    </div>

                                </div>
                                <div className='sm:w-[70%] w-[60%] p-1  sm:p-2' >
                                    <div className='flex border-gray-500 border-2 border-opacity-20 flex-col p-2  my-2'>
                                        <p className=" sm:text-xl text-red-500 font-semibold " >{info?.profile}</p>
                                        <p>{info?.profileInfo}</p>

                                    </div>
                                    <div className='flex flex-col border-gray-500 border-2 border-opacity-20 p-2  my-2'>
                                        <p className=" sm:text-xl text-red-500 font-semibold  " >{info?.projects}</p>
                                        <p>{info?.projectsInfo}</p>

                                    </div>

                                    <div className='flex border-gray-500 border-2 border-opacity-20 flex-col p-2  my-2'>
                                        <p className=" sm:text-xl text-red-500 font-semibold " >{info?.experience}</p>
                                        <p>{info?.experienceInfo}</p>

                                    </div>
                                    <div className='flex border-gray-500 border-2 border-opacity-20 flex-col  p-2 my-2'>
                                        <p className=" sm:text-xl text-red-500 font-semibold " >{info?.education}</p>
                                        <p>{info?.educationInfo}</p>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        </div>
    )
}


export default function Templates() {
    const componentRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className="bg-[#070717] min-h-screen">
            <MyCV componentRef={componentRef} />
            <div>
                <RedButtons hrefComing="/pages/templates" handlePrint={handlePrint} />
            </div>

        </div>
    );
}
