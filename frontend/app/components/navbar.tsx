import React from 'react';
import { RiPagesLine } from "react-icons/ri";


const Navbar: React.FC = () => {
    return (

        <div>
            <nav className="w-full h-[10vh] min-h-12 bg-gradient-to-r from-blue-900 to-blue-100 text-2xl text-white flex flex-row">
               <div className='py-2 px-8 flex flex-row items-center space-x-4 font-bold'>
                <RiPagesLine color='white' />
                <p>CV Generator</p>
                </div>
            </nav>
        </div>

    )

}

export default Navbar