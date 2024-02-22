"use client"
import { useState } from 'react'


function Page() {

  const [signInModal, setSignInModal] = useState(false)
  const [signUpModal, setSignUpModal] = useState(false)

  const goToNextPage = () => {
    setSignUpModal(true)
  }

    return (

        <div style={{ backgroundImage: "url('/home-banner.webp')" }}
            className=' h-[88vh] bg-[#070717] text-white' >
              {
                signUpModal &&(
                  <div className='fixed z-20 h-full w-full bg-white'>
                    <p>Sign Up</p>
                  </div>
                ) 
                
              }
            
            <div className='flex flex-col w-[55vw] justify-center h-[70vh] items-center text-lg'>
                <p className='text-4xl font-bold'> Only 2% of resumes make it past the </p>
                <p className='text-4xl font-bold'>first round. Be in the top 2%</p>
                <p className='mt-8'>Use professional field-tested resume templates that follow the exact</p>
                <p>‘resume rules’ employers look for. Easy to use and done within</p>
                <p>minutes - try now for free!</p>
            
                <button onClick={goToNextPage} className='bg-white text-[#070717] px-8 py-2 font-semibold rounded-md 
                shadow-sm shadow-gray-200 hover:bg-[#070717] hover:text-white text-xl mt-12'>Create My Resume</button>
                
            </div>
            <p>










                
            </p>
        </div>

    )
}

export default Page
