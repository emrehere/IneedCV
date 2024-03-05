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

    const { info, fetchCvDatas, token, checkToken } = useInfo()

    const router = useRouter()

    useEffect(() => {

        checkToken()

        if (!token) {
            router.push('/')
        }

    }, [router, token])



    useEffect(() => {
        fetchCvDatas()
    }, [])

    return (
        <div>
            {
                token && (
                    <div>
                        <div ref={componentRef} className=" mx-auto w-[1000px] flex items-center">
                            <div className=" h-[1240px] border-gray-500 border-2 border-opacity-40 mx-4  my-4 p-4 ">

                                <div className="flex flex-row w-[100%]  ">

                                    <div className='w-[70%]    p-4' >
                                        <div className='flex border-gray-500 border-2 border-opacity-20 flex-col p-4  my-8'>
                                            <p className=" text-xl text-red-500 font-semibold pb-2" >{info?.profile}</p>
                                            <p>{info?.profileInfo}</p>

                                        </div>
                                        <div className='flex flex-col border-gray-500 border-2 border-opacity-20 p-4  my-8'>
                                            <p className=" text-xl text-red-500 font-semibold pb-2 " >{info?.projects}</p>
                                            <p>{info?.projectsInfo}</p>

                                        </div>

                                        <div className='flex border-gray-500 border-2 border-opacity-20 flex-col p-4  my-8'>
                                            <p className=" text-xl text-red-500 font-semibold pb-2" >{info?.experience}</p>
                                            <p>{info?.experienceInfo}</p>

                                        </div>
                                        <div className='flex border-gray-500 border-2 border-opacity-20 flex-col  p-4 my-8'>
                                            <p className=" text-xl text-red-500 font-semibold pb-2 " >{info?.education}</p>
                                            <p>{info?.educationInfo}</p>

                                        </div>

                                    </div>
                                    <div className='w-[30%]    p-4 '>
                                        <div className='rounded-xl'>
                                            <img src={info?.image} alt="Uploaded Image" className='h-80 object-cover mt-6 rounded-xl' />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-semibold">{info?.name}</p>
                                            <p className="text-2xl font-semibold ">{info?.title}</p>
                                            <div className="flex flex-row  pt-4 f justify-between
                         items-center  text-gray-700 mb-2 ">
                                                <p className="mr-2">Phone Number: </p>
                                                <p>{info?.phone}</p>
                                            </div>
                                            <div className="flex flex-row  text-gray-700 items-center mb-2  justify-between">
                                                <p className="mr-2">Email: </p>
                                                <p>{info?.email}</p>
                                            </div>
                                            <div className="flex flex-row  text-gray-700 items-center mb-2  justify-between">
                                                <p className="mr-2">City: </p>
                                                <p>{info?.city}</p>
                                            </div>
                                        </div>
                                        <div className="my-4 border-gray-500 border-2 border-opacity-20 p-4 ">
                                            <p className=" text-2xl text-red-500 font-semibold pb-2">{info?.skills}</p>
                                            <p>{info?.skillsInfo}</p>
                                        </div>

                                        <div className="my-4 border-gray-500 border-2 border-opacity-20 p-4 ">
                                            <p className=" text-xl text-red-500 font-semibold pb-2">{info?.languages}</p>
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
            <div>
                <RedButtons hrefComing="/pages/create3" handlePrint={handlePrint} />
            </div>

        </div>
    );
}