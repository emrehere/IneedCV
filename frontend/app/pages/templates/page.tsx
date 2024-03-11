"use client"
import { useEffect, useState } from 'react'
import { useInfo } from "../../store/contextApi";
import GreenPart from '../../components/greenPart1';
import Buttons from '../../components/buttons';
import { useRouter } from "next/navigation"
import MobileCVfill from "../../components/mobileCVfill"




export default function Templates() {

    const { info, setInfo, fetchCvDatas, token, setToken } = useInfo();
    const [windowInnerWidth, setWindowInnerWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0
      );


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
        fetchCvDatas();
    }, [])

   
    useEffect(() => {
        const handleResize = () => {
          const newInnerWidth = window.innerWidth;
          setWindowInnerWidth(newInnerWidth);
        };
    
        window.addEventListener('resize', handleResize);
        
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 
    
      

    return (
        <div>
        { windowInnerWidth < 822 ? <MobileCVfill hrefSent={"/pages/mycv"} /> : <div className='bg-[#070717] min-h-screen'>
            {
                token && (
                    <div className='py-12'>
                        <div className="h-[1000px] w-[820px] border-2 bg-gray-100 border-gray-500 border-opacity-40 mx-auto  ">

                            <GreenPart />

                            <div className="flex flex-row w-[100%] text-[10px] sm:text-[14px] h-[75%] border-2 border-gray-500 border-opacity-40">
                                <div className='w-[30%]   '>
                                    <input value={info?.skills} onChange={(e) => setInfo({ ...info, skills: e.target.value })} type="text" placeholder='A Title eg. Skills' className='mt-8 px-2 font-semibold text-xl mx-auto w-[90%] flex' />
                                    <textarea value={info?.skillsInfo} onChange={(e) => setInfo({ ...info, skillsInfo: e.target.value })} name="" placeholder='You can fill here' id="" className='w-[90%] px-2  h-[40%] font-medium flex mx-auto mt-2' ></textarea>
                                    <input value={info?.languages} onChange={(e) => setInfo({ ...info, languages: e.target.value })} type="text" placeholder='A Title eg. Languages' className='mt-8 px-2  font-semibold text-xl mx-auto w-[90%] flex' />
                                    <textarea value={info?.languagesInfo} onChange={(e) => setInfo({ ...info, languagesInfo: e.target.value })} name="" id="" placeholder='You can fill here' className='w-[90%] h-[40%] flex mx-auto mt-2 px-2  font-medium' ></textarea>
                                </div>
                                <div className='w-[70%]   pt-8 ' >
                                    <div className='flex flex-col h-[25%]'>
                                        <input value={info?.profile} onChange={(e) => setInfo({ ...info, profile: e.target.value })} type="text" placeholder='A Title eg. Profile' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                                        <textarea value={info?.profileInfo} onChange={(e) => setInfo({ ...info, profileInfo: e.target.value })} name="" id="" placeholder='You can fill here' className='w-[90%] px-2 h-[80%] mx-auto mt-2 font-medium'></textarea>
                                    </div>
                                    <div className='flex flex-col mt-4 h-[25%]'>
                                        <input value={info?.projects} onChange={(e) => setInfo({ ...info, projects: e.target.value })} type="text" placeholder='A Title eg. Projects' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                                        <textarea value={info?.projectsInfo} onChange={(e) => setInfo({ ...info, projectsInfo: e.target.value })} name="" id="" placeholder='You can fill here' className='w-[90%] px-2 h-[80%] mx-auto mt-2 font-medium'></textarea>
                                    </div>

                                    <div className='flex flex-col mt-4  h-[25%]'>
                                        <input value={info?.experience} onChange={(e) => setInfo({ ...info, experience: e.target.value })} type="text" placeholder='A Title eg. Experience' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                                        <textarea value={info?.experienceInfo} onChange={(e) => setInfo({ ...info, experienceInfo: e.target.value })} name="" placeholder='You can fill here' id="" className='w-[90%] px-2 h-[80%] mx-auto mt-2 font-medium'></textarea>
                                    </div>
                                    <div className='flex flex-col mt-4  h-[25%]'>
                                        <input value={info?.education} onChange={(e) => setInfo({ ...info, education: e.target.value })} type="text" placeholder='A Title eg. Education' className='w-[90%] px-2  mx-auto font-semibold text-2xl' />
                                        <textarea value={info?.educationInfo} onChange={(e) => setInfo({ ...info, educationInfo: e.target.value })} name="" placeholder='You can fill here' id="" className='w-[90%] px-2 h-[50%] mx-auto mt-2 font-medium'></textarea>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <Buttons hrefFromParent={"/pages/mycv"} />
                    </div>
                )
            }
        </div> }
        </div>
    )
}