"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useInfo } from '../../store/contextApi'
import ToggleInput from '@/app/components/toggleInput'
import dynamic from 'next/dynamic'

const LoadingState = dynamic(() => import('../../components/loadingState'), { ssr: false })

function Page() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signupError, setSignupError] = useState('')

  const router = useRouter()

  const { token, setToken, inputType, loading, setLoading } = useInfo()



  const saveTheUser = async () => {
    setLoading(true)
    try {
      const res = await fetch('http://server.unurluworks.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })
      console.log(res)
      if (res.ok) {

        const data = await res.json();


        localStorage.setItem('token', JSON.stringify(data.token));

        console.log('user saved')

        router.push('/pages/chooseCV')
      } else {
        const errorData = await res.json();
        setSignupError(errorData.error)
      }

    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {

    const mytoken = localStorage.getItem('token')
    console.log(mytoken)
    setToken(mytoken)
    if (mytoken || token) {
      router.push('/pages/chooseCV')
    }
  }, [router])

  const handleEnterSignup = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      saveTheUser()
    }
  }





  return (
    <div className='sm:bg-[url("/hired1.webp")] bg-[url("/signup_mobile3.webp")] w-full  min-h-screen
    bg-cover  '>
      <div className='flex sm:justify-end justify-center'>
        <div className={` ${signupError ? 'h-[33rem]' : 'h-[22rem]'} flex flex-col sm:w-[45vw] lg:w-[30vw] mt-[3rem] w-[94vw]   bg-white rounded-lg
         sm:m-12 shadow-xl shadow-gray-300 items-center tracking-wide justify-center space-y-2 font-medium text-blue-950`} >
          <h1 className='text-3xl  font-semibold mb-4'>Join Now</h1>
          <div className='flex flex-row sm:w-[40vw] lg:w-[26vw] w-[80vw] items-center justify-between text-[12px] font-semibold sm:font-medium sm:text-base'>
            <p className='w-28 sm:mr-0 mr-2 '>Name:</p>
            <input onKeyDown={handleEnterSignup} value={name} onChange={(e) => setName(e.target.value)} className='bg-blue-300 ml-2
             bg-opacity-20  w-full h-10 outline-none px-2' type="text" placeholder=' your name' />
          </div>
          <div className='flex flex-row sm:w-[40vw] lg:w-[26vw]  w-[80vw] font-semibold sm:font-medium items-center py-2 justify-between text-[12px]  sm:text-base '>
            <p className='w-28 sm:mr-0 mr-2 '>Email:</p>
            <input onKeyDown={handleEnterSignup} value={email} onChange={(e) => setEmail(e.target.value)} className='bg-blue-300 ml-2
             bg-opacity-20  w-full h-10 outline-none px-2' type="text" placeholder=' your email' />
          </div>
          <div className='flex flex-row sm:w-[40vw] lg:w-[26vw] w-[80vw] font-semibold sm:font-medium items-center justify-between text-[12px] sm:text-base'>
            <p className='w-28 sm:mr-0 mr-2'>Password:</p>
            <input onKeyDown={handleEnterSignup} value={password} onChange={(e) => setPassword(e.target.value)} className='bg-blue-300 ml-2
             bg-opacity-20  w-full h-10 outline-none px-2' type={inputType} placeholder=' your password' />
            <ToggleInput />
          </div>
          <div className='sm:w-[26vw] w-[80vw] flex justify-between sm:pt-2 pt-4'>
            <Link href={'/'} >
              <button className='hover:border-opacity-50 border-2 border-opacity-30 border-blue-950 w-[35vw] sm:w-[10vw] py-2'>Back</button>
            </Link>
            <button onClick={saveTheUser} className='bg-blue-950 hover:shadow-lg shadow-gray-400 text-white w-[35vw] sm:w-[10vw] py-2 ml-4'>
              {
                loading ? <LoadingState /> : "Continue"
              }
            </button>
          </div>
          <div className={` ${!signupError && 'h-[12rem] justify-center mt-2'} flex flex-col items-center  `}>
            {signupError && <p className='text-red-500 text-lg font-bold p-2 mt-1'>{signupError} !</p>}
            <div className='' >Already have an account? <Link className='text-orange-500 sm:pl-2 font-semibold text-lg' href={'/pages/signin'}>Sign in</Link></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page
