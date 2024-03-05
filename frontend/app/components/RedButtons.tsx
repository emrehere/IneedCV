import React from 'react'
import Link from 'next/link'

interface RedButtonsProps {
  handlePrint: () => void
  hrefComing: string
}


function RedButtons({ handlePrint, hrefComing }: RedButtonsProps) {
  return (
    <div className="flex flex-row justify-center space-x-8">
      <Link href={hrefComing}>
        <button className='bg-red-500 text-white text-2xl py-4 font-semibold w-[25vw] 
        rounded-xl items-center flex justify-center mb-8' >
          Go Back to Update
        </button>
      </Link>

      <button className='bg-red-500 text-white text-2xl py-4 font-semibold w-[25vw] 
        rounded-xl items-center flex justify-center mb-8' onClick={handlePrint}>
        Print this out!
      </button>

    </div>
  )
}

export default RedButtons
