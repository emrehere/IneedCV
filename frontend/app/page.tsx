"use client"
import Link from 'next/link'
import NavbarWelcome from "./components/NavbarWelcome1";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'




function Page() {



  const [token, setToken] = useState<string | null>('')



  const router = useRouter()

  useEffect(() => {

    const mytoken = localStorage.getItem('token') ?? '';
    console.log(mytoken)
    console.log("token checked")
    setToken(mytoken)

  }, [router, token])




  return (

    <div className=' sm:bg-[url("/home-banner.webp")] bg-[url("/mobile_foto1.webp")]  h-[100vh] bg-[#070717] text-white' >

      <div className='flex flex-col w-full sm:w-[70vw] pt-[10vh] items-center text-lg'>
        <div className='hidden sm:flex flex-col justify-center items-center w-[55vw] '>
          <p className='sm:text-4xl font-bold'> Only 2% of resumes make it past the </p>
          <p className='text-4xl font-bold'>first round. Be in the top 2%</p>
          <p className='mt-2'>Use professional field-tested resume templates that follow the exact</p>
          <p>‘resume rules’ employers look for. Easy to use and done within</p>
          <p>minutes - try now for free!</p>
        </div>

        <div className='flex sm:hidden  flex-col items-center w-[full] justify-center'>
          
          <div className='w-[96vw] text-xl  mb-4 flex items-center flex-col font-bold'>
          <p> Only 2% of resumes make it  </p>
          <p> past the first round now.</p>
          <p>Better be in the top 2% </p>
          </div>
          <div className='w-[85vw] text-lg items-center flex flex-col'>
             <p>Use professional field-tested </p>
             <p>resume templates, follow the</p>
             <p>exact resumes employers</p>
             <p>look for Easy to use and</p>
             <p>done within minutes </p>
             <p> try now for free !</p>
          </div>
        </div>

        {
          !token ? (

            <Link href="/pages/signup">
              <button className='bg-white text-[#070717] px-8 py-2 font-semibold rounded-md 
                shadow-sm shadow-gray-200 hover:bg-[#070717] hover:text-white text-xl mt-8 
                 sm:mt-6'>Create My Resume</button>
            </Link>
          ) : (
            <Link href={'/pages/chooseCV'}>
              <button className='bg-white text-[#070717] px-8 py-2 font-semibold rounded-md 
                shadow-sm shadow-gray-200 hover:bg-[#070717] hover:text-white text-xl mt-8 
                 sm:mt-6'>Create My Resume</button>
            </Link>
          )
        }
      </div>
    </div>

  )
}

export default Page
