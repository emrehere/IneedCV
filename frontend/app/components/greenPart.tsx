"use client"
import { useEffect, useState } from 'react'
import { useInfo } from "../store/contextApi";

export default function GreenPart() {

    const { info, setInfo, fetchCvDatas } = useInfo();

  

    const handleImageChange = (event) => {
        const file = event.target.files[0];

     


        if (file) {
           
            setInfo({ ...info, image: URL.createObjectURL(file) });
        }
    };

    useEffect(() => {
        fetchCvDatas()
    }, [])

    const cvImage = info?.image;


    

    return (
        <div>
            <div className="bg-green-500 h-[25%] flex flex-row ">
                <div className="w-[30%] px-8  flex items-center" >
                    <div className='rounded-xl'>
                        {cvImage ? (
                            <img src={cvImage} alt="Uploaded Image" className='h-80 object-cover mt-6 rounded-xl' />
                        ) : ""}


                        <input type="file" accept="image/*" onChange={handleImageChange} />


                    </div>
                </div>
                <div className="w-[70%]  flex flex-col space-y-4 justify-center items-center" >

                    <input onChange={(e) => setInfo({ ...info, name: e.target.value })}
                        className="w-[50%] font-bold text-3xl px-2 text-gray-800" type="text"
                        placeholder="Full Name..."
                        value={info?.name} />
                    <input onChange={(e) => setInfo({ ...info, title: e.target.value })} className="w-[50%] font-bold text-2xl px-2 text-gray-800" type="text" name="" placeholder="Job Title..." />

                    <div className="flex flex-row w-[50%] pt-8 font-semibold justify-between
                         items-center text-sm text-gray-700">
                        <p className="mr-2">Phone Number: </p>
                        <input onChange={(e) => setInfo({ ...info, phone: e.target.value })} className="w-[65%] h-8 px-2 text-gray-700" type="text" name="" placeholder="Phone..." />
                    </div>
                    <div className="flex flex-row w-[50%] text-gray-700 items-center font-semibold text-sm justify-between">
                        <p className="mr-2">Email: </p>
                        <input onChange={(e) => setInfo({ ...info, email: e.target.value })} className="w-[85%] h-8 px-2 text-gray-700" type="text" name="" placeholder="Email..." />
                    </div>
                    <div className="flex flex-row w-[50%] text-gray-700 items-center font-semibold text-sm justify-between">
                        <p className="mr-2">City: </p>
                        <input onChange={(e) => setInfo({ ...info, city: e.target.value })} className="w-[85%] h-8 px-2 text-gray-700" type="text" name="" placeholder="City..." />
                    </div>

                </div>
            </div>
        </div>
    )
}