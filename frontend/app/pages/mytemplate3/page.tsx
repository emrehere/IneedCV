"use client"
import { useEffect, useState, useRef, RefObject } from "react"
import { useInfo } from "../../store/contextApi"
import { useReactToPrint } from "react-to-print"
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
        <div className=" bg-[#070717] min-h-screen h-full ">
            {
                token && (
                    <div className="pt-12 ">
                        <div ref={componentRef} className=" mx-auto sm:w-[820px] text-[10px] sm:text-[14px] flex items-center">
                            <div className=" h-[1000px] bg-white sm:w-[820px] border-gray-500 border-2 border-opacity-40">

                                <div className="flex flex-row w-[100%]  ">

                                    <div className='w-[60%] sm:w-[70%] px-2 ' >
                                        <div className='flex border-gray-500 border-2 border-opacity-20 flex-col p-2  my-2'>
                                            <p className=" sm:text-xl text-[13px] text-red-500 font-semibold " >{info?.profile}</p>
                                            <p>{info?.profileInfo}</p>

                                        </div>
                                        <div className='flex flex-col border-gray-500 border-2 border-opacity-20 p-2  my-2'>
                                            <p className=" sm:text-xl text-[13px] text-red-500 font-semibold  " >{info?.projects}</p>
                                            <p>{info?.projectsInfo}</p>

                                        </div>

                                        <div className='flex border-gray-500 border-2 border-opacity-20 flex-col p-4  my-2'>
                                            <p className=" sm:text-xl text-[13px] text-red-500 font-semibold " >{info?.experience}</p>
                                            <p>{info?.experienceInfo}</p>

                                        </div>
                                        <div className='flex border-gray-500 border-2 border-opacity-20 flex-col  p-4 my-2'>
                                            <p className=" sm:text-xl text-[13px] text-red-500 font-semibold " >{info?.education}</p>
                                            <p>{info?.educationInfo}</p>

                                        </div>

                                    </div>
                                    <div className='sm:w-[30%] w-[40%]   sm:px-4 p-2 '>
                                        <div className='rounded-xl'>
                                            <img src={info?.image} alt="Uploaded Image" className='sm:h-72 sm:w-72 object-cover rounded-xl' />
                                        </div>
                                        <div>
                                            <p className="sm:text-2xl text-[13px] font-semibold">{info?.name}</p>
                                            <p className="sm:text-2xl text-[13px] font-semibold ">{info?.title}</p>
                                            <div className="flex flex-col sm:flex-row  pt-2  justify-between
                         items-center  text-gray-700 mb-1 ">
                                                <p className="mr-2">Phone Number: </p>
                                                <p>{info?.phone}</p>
                                            </div>
                                            <div className="flex flex-col sm:flex-row  text-gray-700 items-center mb-1  justify-between">
                                                <p className="mr-2">Email: </p>
                                                <p>{info?.email}</p>
                                            </div>
                                            <div className="flex flex-col sm:flex-row  text-gray-700 items-center mb-1  justify-between">
                                                <p className="mr-2">City: </p>
                                                <p>{info?.city}</p>
                                            </div>
                                        </div>
                                        <div className="my-2 border-gray-500 border-2 border-opacity-20 p-2 ">
                                            <p className=" sm:text-xl text-[13px] text-red-500 font-semibold ">{info?.skills}</p>
                                            <p>{info?.skillsInfo}</p>
                                        </div>

                                        <div className="my-4 border-gray-500 border-2 border-opacity-20 p-2 ">
                                            <p className=" sm:text-xl text-[13px] text-red-500 font-semibold ">{info?.languages}</p>
                                            <p>{info?.languagesInfo}</p>
                                        </div>

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
        <div>
            <MyCV componentRef={componentRef} />
            <div className="pt-4 bg-[#070717] mt-4">
                <RedButtons hrefComing="/pages/create3" handlePrint={handlePrint} />
            </div>

        </div>
    );
}