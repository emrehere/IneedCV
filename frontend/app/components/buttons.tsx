"use client"
import { useEffect, useState } from 'react'
import { useInfo } from "../store/contextApi";
import Link from 'next/link';
import  CheckBox from "./shadcnUI/checkbox";
import dynamic from 'next/dynamic';


const LoadingState = dynamic(() => import('../components/loadingState'), { ssr: false })


interface ButtonsProps {
    hrefFromParent: string;
}



export default function Buttons({ hrefFromParent }: ButtonsProps) {


    const { info, saveToDatabase, updateCV, deleteCV, notRobot, robot, loading, loading2 ,loading3, checked} = useInfo();

    

    const saved = info?.save;

    
    const saveCheck = () => {
        if (checked) {
            console.log("Checked in saveCheck", checked)
            saveToDatabase();
        } else {
            alert("Please confirm that you are a human")
        }
    }

    console.log(loading, loading2, loading3)

    return (
        <div>
            <div className='flex flex-row justify-center sm:px-0 px-2 mt-8 sm:mt-4'>
                <div>
                    {saved ? (
                        <div className='flex flex-row'>
                            <div className='flex justify-center'>
                                <button onClick={deleteCV} className='bg-blue-500 hover:bg-blue-600 text-white text-xl w-[40vw] sm:w-[15rem] mx-2 rounded-xl font-bold'>
                                    {
                                        loading2 ? <LoadingState /> : "Delete Your Resume"
                                    }
                                    
                                </button>
                            </div>
                            <div className='flex justify-center'>
                                <Link href={hrefFromParent} >
                                    <button onClick={updateCV} className='bg-blue-500 hover:bg-blue-600 text-white text-xl w-[40vw]  sm:w-[15rem]  mx-2 py-4 rounded-xl font-bold'>
                                        {
                                            loading ? <LoadingState /> : "Update Your Resume"
                                        }
                                    </button>
                                </Link>

                            </div>

                        </div>
                    ) : (
                        // Content to show when saved is false
                        <div className='flex justify-center'>

                            <button onClick={notRobot} className='bg-blue-500 hover:bg-blue-600 text-white text-xl w-[40vw] sm:w-[15rem] mx-2 py-4 rounded-xl font-bold'>
                                {
                                    loading3 ? <LoadingState /> : "Save Your Resume"
                                }
                            </button>


                        </div>
                    )}

                </div>

            </div>

            {
                robot ? <div className='flex justify-center'>
                    <div className='bg-blue-100 sm:h-[30vh] h-[15rem]  rounded-2xl -mt-[30vh] sm:w-[55vw] w-[90vw] p-4 flex items-center
                    justify-center flex-col'>
                        
                        <div className='mb-4'>
                            <CheckBox />
                        </div>
                        <button onClick={saveCheck} className='bg-blue-500 hover:bg-blue-600
                         text-white text-lg sm:w-[18vw] w-[40vw] mx-2 py-2 rounded-xl font-bold'>
                            {
                                loading ? <LoadingState /> : "Save Your Resume"
                            }
                            </button>
                    </div>

                </div> : null
            }
        </div>
    )
}