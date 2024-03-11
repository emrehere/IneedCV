import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useInfo } from '../store/contextApi'
import NavButton from './navbarButton'

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
    <div className='bg-white h-16 overflow-x-hidden  w-full border-b-2 border-white  bg-opacity-90 text-white '>
      {
        !token ? (
          <div className='flex flex-row'>
            <div className='border-r-2 sm:border-0 border-white border-opacity-5'>
              <Link href={'/pages/signin'}>
                <NavButton title={'Sign in'} />
              </Link>
            </div>
            <Link href={'/pages/signup'}>
              <NavButton title={'Sign up'} />
            </Link>
          </div>
        ) : (
          <div className='flex flex-row'>
            <Link href={'/pages/chooseCV'}>
              <div className='border-r-2 sm:border-0 border-white border-opacity-5'>
                <NavButton title={'Choose CV'} />
              </div>
            </Link>
            <Link href={'/'}>
              <div>
                <NavButton title={'Sign out'} />
              </div>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default NavbarWelcome
