import React from 'react'



function footer() {
  return (
    <div className='bg-blue-950 h-[15vh] min-h-10 w-full text-white flex items-center px-[10vw] '>
      <div>
        <div className='flex flex-row space-x-[10%] font-semibold tracking-widest'>

        <p>Crafted with <span className='text-orange-400 font-extrabold'>passion</span> by Emrah UNURLU</p>
          
        </div>
        <div className='h-0.5 w-[80vw] my-2 bg-blue-50 opacity-20'></div>
        <p className='text-sm flex justify-end ' >© 2015 - 2024 Passion® Global Inc.</p>
      </div>
    </div>
  )
}

export default footer