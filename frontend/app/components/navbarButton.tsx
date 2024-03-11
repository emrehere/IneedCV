import React from 'react'

interface Props {
    title: string
}

function NavButton({ title } : Props) {
    return (
        <div>
            <button className='hover:bg-white hover:bg-opacity-90 hover:text-[#070717] 
             bg-[#070717]  h-16 text-sm flex  items-center justify-center w-[50vw]
              font-semibold tracking-wider
             sm:w-[25vw]  sm:text-xl'>
                {title}
            </button>
        </div>
    )
}

export default NavButton
