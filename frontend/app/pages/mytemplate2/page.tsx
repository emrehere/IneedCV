"use client"
import { use, useEffect, useState, useRef, RefObject } from "react"
import { useInfo } from "../../store/contextApi"
import { useReactToPrint } from "react-to-print"
import RedButtons from "@/app/components/RedButtons"
import { useRouter } from "next/navigation"
import Image from "next/image"

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
        <div className=" bg-[#070717] h-full ">
            <div className="py-20 sm:py-12">
                <div ref={componentRef} className="  sm:w-[820px] w-[280px]  sm:px-2  mx-auto" >
                    {
                        token && (
                            <div>
                                <div className="  bg-white h-[500px] sm:h-[1040px] 
                             sm:mx-2 sm:p-2 ">

                                    <div className="flex flex-row  w-[100%] text-[5px] sm:text-[14px]   ">
                                        <div className='w-[45%] sm:w-[35%]  sm:p-2 '>
                                            <div className='relative flex items-center justify-center'>
                                                {
                                                    info?.image && (
                                                        <Image  height={100} width={100} src={info?.image} alt="Uploaded Image" className=' h-36 sm:h-48 w-auto  object-cover mt-6 sm:mt-0 rounded-3xl' />
                                                    )
                                                }
                                            </div>
                                            <div className="flex flex-col  items-center mt-2">
                                                <p className="sm:text-2xl font-semibold">{info?.name}</p>
                                                <p className="sm:text-2xl font-semibold ">{info?.title}</p>
                                                <div className="flex flex-col sm:flex-row  pt-1  justify-between
                                                 items-center  text-gray-700 mb-1 ">
                                                    <p className="mr-2 flex">Phone <span className="sm:flex hidden">&nbsp;Number</span>: </p>
                                                    <p>{info?.phone}</p>
                                                </div>
                                                <div className="flex flex-col sm:flex-row  text-gray-700 items-center mb-1  justify-between">
                                                    <p className="sm:mr-2">Email: </p>
                                                    <p>{info?.email}</p>
                                                </div>
                                                <div className="flex flex-col sm:flex-row  text-gray-700 items-center mb-1  justify-between">
                                                    <p className="sm:mr-2">City: </p>
                                                    <p>{info?.city}</p>
                                                </div>
                                            </div>
                                            <div className="my-4 border-gray-500 border-2 border-opacity-20 p-2 ">
                                                <p className=" sm:text-xl text-red-500 font-semibold ">{info?.skills}</p>
                                                <p>{info?.skillsInfo}</p>
                                            </div>

                                            <div className="my-4 border-gray-500 border-2 border-opacity-20 p-2  ">
                                                <p className=" sm:text-xl text-red-500 font-semibold ">{info?.languages}</p>
                                                <p>{info?.languagesInfo}</p>
                                            </div>

                                        </div>
                                        <div className='w-[55%] sm:w-[65%]    ' >
                                            <div className='flex border-gray-500 border-2 border-opacity-20 flex-col p-2   my-2'>
                                                <p className=" sm:text-xl text-red-500 font-semibold " >{info?.profile}</p>
                                                <p>{info?.profileInfo}</p>

                                            </div>
                                            <div className='flex flex-col border-gray-500 border-2 border-opacity-20 p-2  my-2'>
                                                <p className=" sm:text-xl text-red-500 font-semibold  " >{info?.projects}</p>
                                                <p>{info?.projectsInfo}</p>

                                            </div>

                                            <div className='flex border-gray-500 border-2 border-opacity-20 flex-col p-2   my-2'>
                                                <p className=" sm:text-xl text-red-500 font-semibold" >{info?.experience}</p>
                                                <p>{info?.experienceInfo}</p>

                                            </div>
                                            <div className='flex border-gray-500 border-2 border-opacity-20 flex-col p-2  my-2'>
                                                <p className=" sm:text-xl text-red-500 font-semibold  " >{info?.education}</p>
                                                <p>{info?.educationInfo}</p>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
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
            <div className="sm:-mt-4 mt-4 w-full bg-[#070717] ">
                <RedButtons hrefComing="/pages/create2" handlePrint={handlePrint} />
            </div>

        </div>
    );
}