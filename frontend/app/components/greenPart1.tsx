"use client"
import { useEffect, useState } from 'react'
import { useInfo } from "../store/contextApi";

export default function GreenPart() {

    const { info, setInfo } = useInfo();

  

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
        const file = event.target.files ? event.target.files[0] : null;
    
        if (file) {
            // Assuming you are using FileReader to read the binary data from the file
            const reader = new FileReader();
    
            reader.onload = () => {
                // FileReader.result contains the binary data as ArrayBuffer
                const binaryData: ArrayBuffer = reader.result as ArrayBuffer ;
  
                // Create a Blob from the binary data
                const blob = new Blob([binaryData], { type: 'image/png' });
    
                // Create a Blob URL from the Blob
                const blobUrl = URL.createObjectURL(blob);
    
                // Update the state with the Blob URL
                setInfo({ ...info, image: blobUrl });
            };
    
            // Read the file as ArrayBuffer
            reader.readAsArrayBuffer(file);
        }
    };
    



    return (
        <div>
            <div className="bg-green-500 h-[25%] flex flex-row ">
                <div className="w-[30%] px-8  flex items-center" >
                    <div className='rounded-xl'>
                        {info?.image ? (
                            <img src={info?.image} alt="Uploaded Image" className='h-80 object-cover mt-6 rounded-xl' />
                        ) : ""}


                        <input type="file" accept="image/*" onChange={handleImageChange} />


                    </div>


                </div>
                <div className="w-[70%]  flex flex-col space-y-4 justify-center items-center" >

                    <input onChange={(e) => setInfo({ ...info, name: e.target.value })}
                        className="w-[50%] font-bold text-3xl px-2 text-gray-800" type="text"
                        placeholder="Full Name..."
                        value={info?.name} />
                    <input value={info?.title} onChange={(e) => setInfo({ ...info, title: e.target.value })} className="w-[50%] font-bold text-2xl px-2 text-gray-800" type="text" name="" placeholder="Job Title..." />

                    <div className="flex flex-row w-[50%] pt-8 font-semibold justify-between
                         items-center text-sm text-gray-700">
                        <p className="mr-2">Phone Number: </p>
                        <input value={info?.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} className="w-[65%] h-8 px-2 text-gray-700" type="text" name="" placeholder="Phone..." />
                    </div>
                    <div className="flex flex-row w-[50%] text-gray-700 items-center font-semibold text-sm justify-between">
                        <p className="mr-2">Email: </p>
                        <input value={info?.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} className="w-[85%] h-8 px-2 text-gray-700" type="text" name="" placeholder="Email..." />
                    </div>
                    <div className="flex flex-row w-[50%] text-gray-700 items-center font-semibold text-sm justify-between">
                        <p className="mr-2">City: </p>
                        <input value={info?.city} onChange={(e) => setInfo({ ...info, city: e.target.value })} className="w-[85%] h-8 px-2 text-gray-700" type="text" name="" placeholder="City..." />
                    </div>

                </div>
            </div>
        </div>
    )
}