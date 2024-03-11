import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useInfo } from '../store/contextApi'

function NavbarWelcome() {

  

  const { initialInfo, setInfo, token, setToken } = useInfo()


  const router = useRouter()

  useEffect(() => {
    
    const mytoken = localStorage.getItem('token') ?? '';

    setToken(mytoken)

  }, [router, token])

 

  const signOut = () => {
    localStorage.removeItem('token')
    setToken(null)
    console.log('token removed')
    setInfo({ ...initialInfo })
    console.log('info resetted')
    router.push('/')
    
  }

  return (
    <div className='bg-white h-16 overflow-x-hidden  w-full border-b-2 border-white bg-opacity-90 text-white '>
      {
        !token ? (
          <div className='flex flex-row'>
        <Link href={'/pages/signin'}>
            <button className='hover:bg-white hover:bg-opacity-90 hover:text-[#070717] 
             bg-[#070717]  h-16 text-sm flex  items-center justify-center w-[50vw]
             border-r-2 border-white border-opacity-50 font-semibold tracking-wider
             sm:w-[25vw] sm:text-xl'>Sign in</button>
        </Link>
        <Link href={'/pages/signup'}>
            <button className='hover:bg-white hover:bg-opacity-90  hover:text-[#070717]
             bg-[#070717]   h-16 text-sm flex  items-center justify-center
             w-[50vw] font-semibold tracking-wider sm:w-[25vw] sm:font-bold  sm:flex-row sm:space-x-2
             sm:text-xl'>Sign up</button>
        </Link>
      </div>
        ) : (
          <div className='flex flex-row'>
             <Link href={'/pages/chooseCV'}>
            <button className='hover:bg-white hover:bg-opacity-90 hover:text-[#070717] 
             bg-[#070717]  h-16 text-sm flex  items-center justify-center w-[50vw]
             border-r-2 border-white border-opacity-50 font-semibold tracking-wider
             sm:w-[25vw]  sm:text-xl'>
               Choose CV
             </button>
        </Link>
        <Link href={'/'}>
            <button onClick={signOut} className='hover:bg-white hover:bg-opacity-90  hover:text-[#070717]
             bg-[#070717]   h-16 text-sm flex flex-col items-center justify-center
             w-[50vw] font-semibold tracking-wider sm:w-[25vw] sm:font-bold  
             sm:text-xl'>
               Sign out
             </button>
        </Link>
          </div>
        )
      }
    </div>
  )
}

export default NavbarWelcome
