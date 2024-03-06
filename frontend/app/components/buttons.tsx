"use client"
import { useEffect, useState } from 'react'
import { useInfo } from "../store/contextApi";
import Link from 'next/link';
import  CheckBox from "./shadcnUI/checkbox";

interface ButtonsProps {
    hrefFromParent: string;
}



export default function Buttons({ hrefFromParent }: ButtonsProps) {


    const { info, setInfo, saveToDatabase, updateCV, deleteCV, notRobot, robot, setRobot, fetchCvDatas } = useInfo();

    const [checked, setChecked] = useState(false);

    const saved = info?.save;

    
    const saveCheck = () => {
        if (checked) {
            saveToDatabase();
        } else {
            alert("Please confirm that you are a human")
        }
    }



    return (
        <div>
            <div className='flex flex-row justify-center  mt-4'>
                <div>
                    {saved ? (
                        <div className='flex flex-row'>
                            <div className='flex justify-center'>
                                <button onClick={deleteCV} className='bg-blue-500 hover:bg-blue-600 text-white text-xl w-[24vw] mx-2 rounded-xl font-bold'>
                                    Delete Your Resume
                                </button>
                            </div>
                            <div className='flex justify-center'>
                                <Link href={hrefFromParent} >
                                    <button onClick={updateCV} className='bg-blue-500 hover:bg-blue-600 text-white text-xl w-[24vw] mx-2 py-4 rounded-xl font-bold'>
                                        Update and Proceed
                                    </button>
                                </Link>

                            </div>

                        </div>
                    ) : (
                        // Content to show when saved is false
                        <div className='flex justify-center'>

                            <button onClick={notRobot} className='bg-blue-500 hover:bg-blue-600 text-white text-xl w-[24vw] mx-2 py-4 rounded-xl font-bold'>
                                Save Your Resume Now
                            </button>


                        </div>
                    )}

                </div>

            </div>

            {
                robot ? <div className='flex justify-center'>
                    <div className='bg-blue-100 h-[30vh]  rounded-2xl -mt-[30vh] w-[55vw] flex items-center
                    justify-center flex-col'>
                        
                        <div className='mb-4'>
                            <CheckBox checked={checked} setChecked={setChecked} />
                        </div>
                        <button onClick={saveCheck} className='bg-blue-500 hover:bg-blue-600 text-white text-lg w-[18vw] mx-2 py-2 rounded-xl font-bold'>Save Now</button>
                    </div>

                </div> : null
            }
        </div>
    )
}