import React from 'react'

function Page() {
    return (
        <div style={{ backgroundImage: "url('/signin5.webp')" }} className='h-[105vh] -mt-[5vh] bg-cover '>
            <div className='h-[92vh] w-full flex flex-col'>
                <div className='flex-grow' ></div>
                <div className='flex flex-row'>
                    <div className='flex-grow'></div>
                    <div className=' bg-white shadow-lg text-gray-600  shadow-[#c0a175] h-[22rem] w-[50vw]
                     rounded-lg mr-[7vw] items-center flex justify-center flex-col'>
                       <div className='flex flex-col items-center mb-12'>
                       <h1 className='text-4xl pb-2 tracking-widest font-semibold text-blue-950'>Long Time No See</h1>
                        <h2 className='text-3xl font-semibold tracking-wide text-blue-950 ' >Where've You Been !</h2>                      
                       </div>
                       <div className='flex flex-row w-[35vw] items-center justify-between'>
                       <p>Email: </p>
                        <input className='h-10 w-[28vw] border-blue-950 border-2 outline-none border-opacity-25 px-2' type="text" placeholder='your email' />
                       </div>
                       <div className='flex flex-row w-[35vw] items-center justify-between pt-4'>
                       <p>Password: </p>
                        <input className='h-10 ml-4 w-[28vw] border-blue-950 border-2 outline-none border-opacity-25 px-2
                         ' type="password" placeholder='your password' />
                        <div>  
                         <p className='absolute bg-gray-600 h-4 w-4 rounded-full -ml-6 -mt-2 '>    </p>
                        </div>
                    
                       </div>
                         
                        <button className='bg-blue-950 text-white py-2 w-[20vw] mt-8 rounded-md font-semibold text-xl '>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
