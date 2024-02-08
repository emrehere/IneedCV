"use client"
import { useState } from 'react'

export default function Templates() {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            // You can perform additional checks or processing here if needed
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    return (
        <div>
            <div className="h-[1400px] w-[1000px] bg-blue-500 mx-auto my-16 p-8 ">
                <div className="bg-green-500 h-[25%] flex flex-row ">
                    <div className="w-[30%] px-8  flex items-center" >
                        <div className='rounded-xl'>
                            {selectedImage && <img src={selectedImage} alt="Uploaded Image" 
                            className='h-80 mt-6 rounded-xl' />}

                      
                            <input type="file" accept="image/*" onChange={handleImageChange} />

                            
                        </div>
                    </div>
                    <div className="w-[70%] flex flex-col space-y-4 justify-center items-center" >

                        <input className="w-[50%] font-bold text-3xl px-2 text-gray-800" type="text" name="" placeholder="Full Name..." />
                        <input className="w-[50%] font-bold text-2xl px-2 text-gray-800" type="text" name="" placeholder="Job Title..." />

                        <div className="flex flex-row w-[50%] pt-8 font-semibold justify-between
                         items-center text-sm text-gray-700">
                            <p className="mr-2">Phone Number: </p>
                            <input className="w-[65%] h-8 px-2 text-gray-700" type="text" name="" placeholder="Phone..." />
                        </div>
                        <div className="flex flex-row w-[50%] text-gray-700 items-center font-semibold text-sm justify-between">
                            <p className="mr-2">Email: </p>
                            <input className="w-[85%] h-8 px-2 text-gray-700" type="text" name="" placeholder="Email..." />
                        </div>
                        <div className="flex flex-row w-[50%] text-gray-700 items-center font-semibold text-sm justify-between">
                            <p className="mr-2">City: </p>
                            <input className="w-[85%] h-8 px-2 text-gray-700" type="text" name="" placeholder="City..." />
                        </div>

                    </div>
                </div>
                <div className="flex flex-row">
                    <div>a</div>
                    <div>b</div>
                </div>
            </div>
        </div>
    )
}