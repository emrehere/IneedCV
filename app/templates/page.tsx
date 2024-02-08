"use client"
import { useEffect, useState } from 'react'
import { useInfo } from "../store/contextApi";


export default function Templates() {

    const { info, setInfo} = useInfo();

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        setInfo({ ...info, image: file });
     

        if (file) {
            // You can perform additional checks or processing here if needed
            setSelectedImage(URL.createObjectURL(file));
        }
    };

      
   


    return (
        <div>
           
            <div className="h-[1400px] w-[1000px] bg-blue-500 mx-auto my-8 p-8 ">
                <div className="bg-green-500 h-[25%] flex flex-row ">
                    <div className="w-[30%] px-8  flex items-center" >
                        <div className='rounded-xl'>
                            {selectedImage && <img src={selectedImage} alt="Uploaded Image" 
                            className='h-80 object-cover mt-6 rounded-xl' />}

                      
                            <input type="file" accept="image/*" onChange={handleImageChange} />

                            
                        </div>
                    </div>
                    <div className="w-[70%]  flex flex-col space-y-4 justify-center items-center" >

                        <input onChange={(e) => setInfo({ ...info, name: e.target.value })} 
                        className="w-[50%] font-bold text-3xl px-2 text-gray-800" type="text"
                          placeholder="Full Name..." />
                        <input onChange={(e) => setInfo({ ...info, title: e.target.value })} className="w-[50%] font-bold text-2xl px-2 text-gray-800" type="text" name="" placeholder="Job Title..." />

                        <div className="flex flex-row w-[50%] pt-8 font-semibold justify-between
                         items-center text-sm text-gray-700">
                            <p className="mr-2">Phone Number: </p>
                            <input  onChange={(e) => setInfo({ ...info, phone: e.target.value })} className="w-[65%] h-8 px-2 text-gray-700" type="text" name="" placeholder="Phone..." />
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
                <div className="flex flex-row w-[100%] h-[80%] ">
                    <div className='w-[30%] bg-orange-500 h-[70%] '>
                    <input  onChange={(e) => setInfo({ ...info, skills: e.target.value })} type="text" placeholder='A Title eg. Skills' className='mt-8 px-2 font-semibold text-xl mx-auto w-[90%] flex' />
                    <textarea onChange={(e) => setInfo({ ...info, skillsInfo: e.target.value })} name="" placeholder='You can fill here' id="" className='w-[90%] px-2  h-[40%] font-medium flex mx-auto mt-2' ></textarea>
                    <input  onChange={(e) => setInfo({ ...info, languages: e.target.value })} type="text" placeholder='A Title eg. Languages' className='mt-8 px-2  font-semibold text-xl mx-auto w-[90%] flex' />
                    <textarea onChange={(e) => setInfo({ ...info, languagesInfo: e.target.value })} name="" id="" placeholder='You can fill here' className='w-[90%] h-[40%] flex mx-auto mt-2 px-2  font-medium' ></textarea>
                    </div>
                    <div className='w-[70%]  bg-red-500 h-[90%] pt-8' >
                        <div className='flex flex-col h-[25%]'>
                            <input  onChange={(e) => setInfo({ ...info, profile: e.target.value })} type="text" placeholder='A Title eg. Profile' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                            <textarea onChange={(e) => setInfo({ ...info, profileInfo: e.target.value })} name="" id="" placeholder='You can fill here' className='w-[90%] px-2 h-[80%] mx-auto mt-2 font-medium'></textarea>
                        </div>
                        <div className='flex flex-col mt-4 h-[25%]'>
                            <input  onChange={(e) => setInfo({ ...info, projects: e.target.value })} type="text" placeholder='A Title eg. Projects' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                            <textarea onChange={(e) => setInfo({ ...info, projectsInfo: e.target.value })} name="" id="" placeholder='You can fill here' className='w-[90%] px-2 h-[80%] mx-auto mt-2 font-medium'></textarea>
                        </div>
                        
                        <div className='flex flex-col mt-4  h-[25%]'>
                            <input onChange={(e) => setInfo({ ...info, experience: e.target.value })} type="text" placeholder='A Title eg. Experience' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                            <textarea onChange={(e) => setInfo({ ...info, experienceInfo: e.target.value })} name="" placeholder='You can fill here' id="" className='w-[90%] px-2 h-[80%] mx-auto mt-2 font-medium'></textarea>
                        </div>
                        <div className='flex flex-col mt-4  h-[25%]'>
                            <input onChange={(e) => setInfo({ ...info, education: e.target.value })} type="text" placeholder='A Title eg. Education' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                            <textarea onChange={(e) => setInfo({ ...info, educationInfo: e.target.value })} name="" placeholder='You can fill here' id="" className='w-[90%] px-2 h-[50%] mx-auto mt-2 font-medium'></textarea>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center space-x-32 mb-16'>
            <div className='flex justify-center '>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-2 rounded-xl font-bold'>Save Your Resume Now</button>
            </div>
            <div className='flex justify-center '>
                <button className='bg-blue-500 hover:bg-blue-600 text-white text-xl px-4 py-2 rounded-xl font-bold'>Proceed to Customize Further</button>
            </div>
            </div>
        </div>
    )
}