"use client"
import Link from 'next/link'
import NavbarWelcome from "./components/NavbarWelcome1";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useInfo } from './store/contextApi'



function Page() {

  

  const { token, checkToken  } = useInfo()

  

  const router = useRouter()

  useEffect(() => {

    checkToken()

  }, [router, token])



  return (

    <div style={{ backgroundImage: "url('/home-banner.webp')" }}
      className=' h-[100vh] bg-[#070717] text-white' >
      <NavbarWelcome />
      <div className='flex flex-col w-[55vw] justify-center h-[70vh] items-center text-lg'>
        <p className='text-4xl font-bold'> Only 2% of resumes make it past the </p>
        <p className='text-4xl font-bold'>first round. Be in the top 2%</p>
        <p className='mt-8'>Use professional field-tested resume templates that follow the exact</p>
        <p>‘resume rules’ employers look for. Easy to use and done within</p>
        <p>minutes - try now for free!</p>
        {
          !token ? (

            <Link href="/pages/signup">
              <button className='bg-white text-[#070717] px-8 py-2 font-semibold rounded-md 
                shadow-sm shadow-gray-200 hover:bg-[#070717] hover:text-white text-xl mt-12'>Create My Resume</button>
            </Link>
          ) : (
            <Link href={'/pages/chooseCV'}>
              <button className='bg-white text-[#070717] px-8 py-2 font-semibold rounded-md 
                shadow-sm shadow-gray-200 hover:bg-[#070717] hover:text-white text-xl mt-12'>Create My Resume</button>
            </Link>
          )
        }
      </div>
    </div>

  )
}

export default Page
