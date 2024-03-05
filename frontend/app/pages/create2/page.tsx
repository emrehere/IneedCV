"use client"
import { use, useEffect, useState } from "react"
import { useInfo } from "../../store/contextApi"
import Link from "next/link"
import GreenPart from "../../components/greenPart2"

export default function MyCV() {

    const { info, fetchCvDatas, setInfo } = useInfo()


    useEffect(() => {
        fetchCvDatas()
    }, [])

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        console.log("file",file)
        const base64 = await convertToBase64(file);
        console.log("base64",base64)
        setInfo({ ...info, image: base64 })
      }



    return (
        <div>
            <div className="h-[1400px] w-[1000px] bg-gray-100 border-gray-500 border-2 border-opacity-40  mx-auto my-8 p-8 ">

                <div className="flex flex-row w-[100%] h-full border-gray-500 border-2 border-opacity-40   ">

                <div className='w-[30%]    p-4 '>
                        <div className='rounded-xl'>
                            {info?.image ? (
                                <img src={info?.image} alt="Uploaded Image" className='h-80 object-cover mt-6 rounded-xl' />
                            ) : ""}


                            <input type="file" accept="image/*" onChange={handleFileUpload} />
                        </div>
                        <div className="flex flex-col">
                            <input onChange={(e) => setInfo({ ...info, name: e.target.value })}
                                className=" font-bold text-3xl px-2 mt-4 text-gray-800" type="text"
                                placeholder="Full Name..."
                                value={info?.name} />
                            <input value={info?.title} onChange={(e) => setInfo({ ...info, title: e.target.value })} className=" font-bold text-2xl mt-4 px-2 text-gray-800" type="text" name="" placeholder="Job Title..." />
                           
                            <div className="flex flex-row  pt-4 f justify-between
                         items-center  text-gray-700 mb-2 ">
                                <p className="mr-2">Phone Number: </p>
                                <input value={info?.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} className="w-[65%] h-8 px-2 text-gray-700" type="text" name="" placeholder="Phone..." />

                            </div>
                            <div className="flex flex-row  text-gray-700 items-center mb-2  justify-between">
                            <p className="mr-2">Email: </p>
                        <input value={info?.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} className="w-[85%] h-8 px-2 text-gray-700" type="text" name="" placeholder="Email..." />
                     </div>
                            <div className="flex flex-row  text-gray-700 items-center mb-2  justify-between">
                            <p className="mr-2">City: </p>
                        <input value={info?.city} onChange={(e) => setInfo({ ...info, city: e.target.value })} className="w-[85%] h-8 px-2 text-gray-700" type="text" name="" placeholder="City..." />
                    </div>
                        </div>
                        <div className=" h-[25%] border-gray-500 border-2 border-opacity-20 p-2 ">
                        <input value={info?.skills} onChange={(e) => setInfo({ ...info, skills: e.target.value })} type="text" placeholder='A Title eg. Skills' className='mt-8 px-2 font-semibold text-xl mx-auto w-[90%] flex' />
                        <textarea value={info?.skillsInfo} onChange={(e) => setInfo({ ...info, skillsInfo: e.target.value })} name="" placeholder='You can fill here' id="" className='w-[90%] px-2  h-[70%] font-medium flex mx-auto mt-2' ></textarea>
        
                        </div>

                        <div className=" h-[25%] border-gray-500 border-2 border-opacity-20 p-2 ">
                        <input value={info?.languages} onChange={(e) => setInfo({ ...info, languages: e.target.value })} type="text" placeholder='A Title eg. Languages' className='mt-8 px-2  font-semibold text-xl mx-auto w-[90%] flex' />
                        <textarea value={info?.languagesInfo} onChange={(e) => setInfo({ ...info, languagesInfo: e.target.value })} name="" id="" placeholder='You can fill here' className='w-[90%] h-[70%] flex mx-auto mt-2 px-2  font-medium' ></textarea>
                        </div>

                    </div>

                    <div className='w-[70%]    p-4' >
                        <div className='flex h-[20%] border-gray-500 border-2 border-opacity-20 flex-col p-4  my-8'>

                            <input value={info?.profile} onChange={(e) => setInfo({ ...info, profile: e.target.value })} type="text" placeholder='A Title eg. Profile' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                            <textarea value={info?.profileInfo} onChange={(e) => setInfo({ ...info, profileInfo: e.target.value })} name="" id="" placeholder='You can fill here' className='w-[90%] px-2 h-[80%] mx-auto mt-2 font-medium'></textarea>

                        </div>
                        <div className='flex flex-col h-[20%] border-gray-500 border-2 border-opacity-20 p-4  my-8'>
                            <input value={info?.projects} onChange={(e) => setInfo({ ...info, projects: e.target.value })} type="text" placeholder='A Title eg. Projects' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                            <textarea value={info?.projectsInfo} onChange={(e) => setInfo({ ...info, projectsInfo: e.target.value })} name="" id="" placeholder='You can fill here' className='w-[90%] px-2 h-[80%] mx-auto mt-2 font-medium'></textarea>

                        </div>

                        <div className='flex h-[20%] border-gray-500 border-2 border-opacity-20 flex-col p-4  my-8'>
                            <input value={info?.experience} onChange={(e) => setInfo({ ...info, experience: e.target.value })} type="text" placeholder='A Title eg. Experience' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                            <textarea value={info?.experienceInfo} onChange={(e) => setInfo({ ...info, experienceInfo: e.target.value })} name="" placeholder='You can fill here' id="" className='w-[90%] px-2 h-[80%] mx-auto mt-2 font-medium'></textarea>


                        </div>
                        <div className='flex h-[20%] border-gray-500 border-2 border-opacity-20 flex-col  p-4 my-8'>
                            <input value={info?.education} onChange={(e) => setInfo({ ...info, education: e.target.value })} type="text" placeholder='A Title eg. Education' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                            <textarea value={info?.educationInfo} onChange={(e) => setInfo({ ...info, educationInfo: e.target.value })} name="" placeholder='You can fill here' id="" className='w-[90%] px-2 h-[80%] mx-auto mt-2 font-medium'></textarea>

                        </div>

                    </div>
                  
                </div>
            </div>
        </div>
    )
}


function convertToBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }