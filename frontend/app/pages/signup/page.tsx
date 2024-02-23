"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function Page() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


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
        console.log('user saved')
      } else {
        console.log('user not saved')
      }

    } catch (error) {
      console.log(error)
    }

    }
  


  return (
    <div style={{ backgroundImage: "url('/hired1.webp')" }} className='w-full min-h-screen
    bg-cover  '>
      <div className='flex justify-end'> 
        <div className='flex flex-col w-[30vw] h-[22rem] bg-white rounded-lg
         m-12 shadow-xl shadow-gray-300 items-center tracking-wide justify-center space-y-2 font-medium text-gray-700' >
            <h1 className='text-3xl text-blue-950 font-semibold mb-4'>Join Now</h1>
            <div className='flex flex-row w-[26vw] items-center justify-between'>
            <p>Name:</p>
            <input value={name} onChange={(e) => setName(e.target.value)} className='bg-blue-300 bg-opacity-20 w-[19vw] h-10 outline-none px-2' type="text" placeholder=' your name' />
            </div>
            <div className='flex flex-row w-[26vw] items-center py-2 justify-between '>
            <p>Email:</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-blue-300 bg-opacity-20 w-[19vw] h-10 outline-none px-2' type="text" placeholder=' your email' />
            </div>
            <div className='flex flex-row w-[26vw] items-center justify-between'>
            <p>Password:</p>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-blue-300 bg-opacity-20 w-[19vw] h-10 outline-none px-2' type="text" placeholder=' your password' />
            </div>
            <div className='w-[26vw] flex justify-between pt-4'>
                <button className='hover:border-opacity-50 border-2 border-opacity-30 border-blue-950 w-[10vw] py-2'>Back</button>
                <button onClick={saveTheUser} className='bg-blue-950 hover:shadow-lg shadow-gray-300 text-white w-[10vw] py-2 ml-4'>Continue</button>
            </div>
            <div className='pt-2 '>Already have an account? <Link className='text-orange-500 pl-2 font-semibold text-lg' href={'/pages/signin'}>Sign in</Link></div>
            
        </div>
      </div>
    </div>
  )
}

export default Page
