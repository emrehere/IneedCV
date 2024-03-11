import Link from 'next/link'
import React from 'react'


interface Props {
    hrefSend: string | undefined
}

function chooseCVbutton({ hrefSend }: Props) {
    return (
        <div>
            <Link href={hrefSend === undefined ? "" : hrefSend}>
                <button className='bg-red-500 hover:bg-red-600 text-white
                 xl:text-xl md:w-[18vw] sm:w-[22vw] w-[50vw] py-2 
                 mx-2 rounded-xl font-bold text-sm'> Choose </button>
            </Link>
        </div>
    )
}

export default chooseCVbutton
