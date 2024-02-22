import React from 'react'
import Link from 'next/link'

function Page() {
  return (
    <div style={{ backgroundImage: "url('/hired1.webp')" }} className='w-full min-h-screen
    bg-cover  '>
      <div className='flex justify-end'> 
        <div className='flex flex-col w-[30vw] h-[22rem] bg-white rounded-lg
         m-12 shadow-xl shadow-gray-300 items-center tracking-wide justify-center space-y-2 font-medium text-gray-700' >
            <h1 className='text-3xl text-blue-950 font-semibold mb-4'>Join Now</h1>
            <div className='flex flex-row w-[26vw] items-center justify-between'>
            <p>Name:</p>
            <input className='bg-blue-300 bg-opacity-20 w-[19vw] h-10 outline-none px-2' type="text" placeholder=' your name' />
            </div>
            <div className='flex flex-row w-[26vw] items-center py-2 justify-between '>
            <p>Email:</p>
            <input className='bg-blue-300 bg-opacity-20 w-[19vw] h-10 outline-none px-2' type="text" placeholder=' your email' />
            </div>
            <div className='flex flex-row w-[26vw] items-center justify-between'>
            <p>Password:</p>
            <input className='bg-blue-300 bg-opacity-20 w-[19vw] h-10 outline-none px-2' type="text" placeholder=' your password' />
            </div>
            <div>
                <button>Back</button>
                <button>Continue</button>
            </div>
            <div>Already have an account? <Link href={'/pages/signin'}>Sign in</Link></div>
            
        </div>
      </div>
    </div>
  )
}

export default Page
