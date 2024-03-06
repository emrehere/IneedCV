import Link from 'next/link'
import React from 'react'


interface Props {
    hrefSend: string | undefined
}

function chooseCVbutton({ hrefSend }: Props) {
    return (
        <div>
            <Link href={hrefSend === undefined ? "" : hrefSend}>
                <button className='bg-red-500 hover:bg-red-600 text-white text-xl sm:w-[22vw] w-[80vw] py-2 mx-2 rounded-xl font-bold'>Proceed With This CV</button>
            </Link>
        </div>
    )
}

export default chooseCVbutton
