import React from 'react'
import Link from 'next/link'

function NavbarWelcome() {
  return (
    <div className='bg-white h-[12vh] min-h-16 w-full bg-opacity-90 text-white '>
      <div>
        <Link href={'/pages/signin'}>
            <button className='hover:bg-white hover:bg-opacity-90 hover:text-[#070717]  bg-[#070717] px-12 
            min-h-16 h-[12vh] font-semibold text-xl tracking-wider'>Sign in</button>
        </Link>
        <Link href={'/pages/signup'}>
            <button className='hover:bg-white hover:bg-opacity-90 h-[12vh] hover:text-[#070717] bg-[#070717] px-12
             min-h-16 font-semibold text-xl tracking-wider'>Sign up</button>
        </Link>
      </div>
    </div>
  )
}

export default NavbarWelcome
