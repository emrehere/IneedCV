import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useInfo } from '../store/contextApi'

function NavbarWelcome() {

  const [token, setToken] = useState<string | null>(null)

  const { initialInfo, setInfo } = useInfo()

  const router = useRouter()

  useEffect(() => {
      
    const mytoken = localStorage.getItem('token') ?? '';
    console.log(mytoken)
    setToken(mytoken)
   

  },[ router, token ])

  const signOut = () => {
    localStorage.removeItem('token')
    setToken(null)
    console.log('token removed')
    setInfo({ ...initialInfo })
    console.log('info resetted')
    router.push('/')
    
  }

  return (
    <div className='bg-white h-[12vh] min-h-16 w-full bg-opacity-90 text-white '>
      {
        !token ? (
          <div>
        <Link href={'/pages/signin'}>
            <button className='hover:bg-white hover:bg-opacity-90 hover:text-[#070717]  bg-[#070717] px-12 
            min-h-16 h-[12vh] font-semibold text-xl tracking-wider'>Sign in</button>
        </Link>
        <Link href={'/pages/signup'}>
            <button className='hover:bg-white hover:bg-opacity-90 h-[12vh] hover:text-[#070717] bg-[#070717] px-12
             min-h-16 font-semibold text-xl tracking-wider'>Sign up</button>
        </Link>
      </div>
        ) : (
          <div>
             <Link href={'/pages/chooseCV'}>
            <button className='hover:bg-white hover:bg-opacity-90 hover:text-[#070717]  bg-[#070717] px-12 
            min-h-16 h-[12vh] font-semibold text-xl tracking-wider'>See All Templates</button>
        </Link>
        <Link href={''}>
            <button onClick={signOut} className='hover:bg-white hover:bg-opacity-90 h-[12vh] hover:text-[#070717] bg-[#070717] px-12
             min-h-16 font-semibold text-xl tracking-wider'>Sign out</button>
        </Link>
          </div>
        )
      }
    </div>
  )
}

export default NavbarWelcome
