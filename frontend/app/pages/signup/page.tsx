"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useInfo } from '../../store/contextApi'

function Page() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const { token, setToken } = useInfo()



  const saveTheUser = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/register', {
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
        console.log(data)

        // Store the token securely in localStorage

        localStorage.setItem('token', JSON.stringify(data.token));

        console.log('user saved')

        router.push('/pages/chooseCV')
      } else {
        console.log('user not saved')
      }

    } catch (error) {
      console.log(error)
    }

    }

    useEffect(() => {
      
      const mytoken = localStorage.getItem('token')
      console.log(mytoken)
      setToken(mytoken)
      if (mytoken || token) {
        router.push('/pages/chooseCV')
      }
    },[ router ])
  
  

  return (
    <div className='sm:bg-[url("/hired1.webp")] bg-[url("/signup_mobile3.webp")] w-full  min-h-screen
    bg-cover  '>
      <div className='flex sm:justify-end justify-center'> 
        <div className='flex flex-col sm:w-[30vw] mt-[3rem] w-[94vw] h-[22rem]  bg-white rounded-lg
         sm:m-12 shadow-xl shadow-gray-300 items-center tracking-wide justify-center space-y-2 font-medium text-blue-950' >
            <h1 className='text-3xl  font-semibold mb-4'>Join Now</h1>
            <div className='flex flex-row sm:w-[26vw] w-[80vw] items-center justify-between text-[12px] font-semibold sm:font-medium sm:text-base'>
            <p className='w-24 sm:mr-0 mr-2 '>Name:</p>
            <input value={name} onChange={(e) => setName(e.target.value)} className='bg-blue-300
             bg-opacity-20 sm:w-[19vw] w-full h-10 outline-none px-2' type="text" placeholder=' your name' />
            </div>
            <div className='flex flex-row sm:w-[26vw]  w-[80vw] font-semibold sm:font-medium items-center py-2 justify-between text-[12px]  sm:text-base '>
            <p className='w-24 sm:mr-0 mr-2 '>Email:</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-blue-300
             bg-opacity-20 sm:w-[19vw] w-full h-10 outline-none px-2' type="text" placeholder=' your email' />
            </div>
            <div className='flex flex-row sm:w-[26vw] w-[80vw] font-semibold sm:font-medium items-center justify-between text-[12px] sm:text-base'>
            <p className='w-24 sm:mr-0 mr-2'>Password:</p>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-blue-300
             bg-opacity-20 sm:w-[19vw] w-full h-10 outline-none px-2' type="text" placeholder=' your password' />
            </div>
            <div className='sm:w-[26vw] w-[80vw] flex justify-between sm:pt-4 pt-6'>
                <button className='hover:border-opacity-50 border-2 border-opacity-30 border-blue-950 w-[35vw] sm:w-[10vw] py-2'>Back</button>
                <button onClick={saveTheUser} className='bg-blue-950 hover:shadow-lg shadow-gray-400 text-white w-[35vw] sm:w-[10vw] py-2 ml-4'>Continue</button>
            </div>
            <div className='pt-2 '>Already have an account? <Link className='text-orange-500 sm:pl-2 font-semibold text-lg' href={'/pages/signin'}>Sign in</Link></div>
            
        </div>
      </div>
    </div>
  )
}

export default Page
