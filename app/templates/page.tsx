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
                    <div className="w-[70%]  flex flex-col space-y-4 justify-center items-center" >

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
                <div className="flex flex-row w-[100%] h-[80%] ">
                    <div className='w-[30%] bg-orange-500 h-[70%] '>
                    <input type="text" placeholder='A Title eg. Skills' className='mt-8 px-2 font-semibold text-xl mx-auto w-[90%] flex' />
                    <textarea name="" placeholder='You can fill here' id="" className='w-[90%] px-2  h-[40%] font-medium flex mx-auto mt-2' ></textarea>
                    <input type="text" placeholder='A Title eg. Languages' className='mt-8 px-2  font-semibold text-xl mx-auto w-[90%] flex' />
                    <textarea name="" id="" placeholder='You can fill here' className='w-[90%] h-[40%] flex mx-auto mt-2 px-2  font-medium' ></textarea>
                    </div>
                    <div className='w-[70%]  bg-red-500 h-[90%] pt-8' >
                        <div className='flex flex-col h-[25%]'>
                            <input type="text" placeholder='A Title eg. Profile' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                            <textarea name="" id="" placeholder='You can fill here' className='w-[90%] px-2 h-[80%] mx-auto mt-2 font-medium'></textarea>
                        </div>
                        <div className='flex flex-col mt-4 h-[25%]'>
                            <input type="text" placeholder='A Title eg. Projects' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                            <textarea name="" id="" placeholder='You can fill here' className='w-[90%] px-2 h-[80%] mx-auto mt-2 font-medium'></textarea>
                        </div>
                        
                        <div className='flex flex-col mt-4  h-[25%]'>
                            <input type="text" placeholder='A Title eg. Experience' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                            <textarea name="" placeholder='You can fill here' id="" className='w-[90%] px-2 h-[80%] mx-auto mt-2 font-medium'></textarea>
                        </div>
                        <div className='flex flex-col mt-4  h-[25%]'>
                            <input type="text" placeholder='A Title eg. Education' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                            <textarea name="" placeholder='You can fill here' id="" className='w-[90%] px-2 h-[50%] mx-auto mt-2 font-medium'></textarea>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}