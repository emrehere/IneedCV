"use client"
import React, { useEffect, useState } from 'react'
import ToggleInput from '@/app/components/toggleInput'

import { useRouter } from 'next/navigation'

import { useInfo } from '../../store/contextApi'





function Page() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState("")
    const [userData, setUserData] = useState({});

    const { token, setToken, inputType, setInputType, toggleInputType } = useInfo()

    const router = useRouter()



    useEffect(() => {

        const mytoken = localStorage.getItem('token') ?? '';
        console.log(mytoken)
        console.log("token checked")
        setToken(mytoken)
        if (mytoken || token) {
            router.push('/pages/chooseCV')
        }

    }, [router, token])





    const loginUser = async () => {


        try {
            const res = await fetch('http://server.unurluworks.com/api/login', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (res.ok) {
                const data = await res.json();
                setUserData(data);
                console.log(data)

                // Store the token securely in localStorage
                localStorage.setItem('token', JSON.stringify(data.token));

                console.log('User logged in');
                router.push('/pages/chooseCV')
            } else {
                console.log('User not logged in. Status:', res.status);
                const errorData = await res.json(); // If the server returns error details in the response body
                setLoginError(errorData.error);
            }
        } catch (error) {
            console.log('Error during login:', error);
        }
    };

    console.log(userData);



    return (
        <div className='h-[105vh] sm:bg-[url("/signin5.webp")] bg-[url("/signin5_mobile.webp")] bg-cover '>
            <div className='h-[80vh] w-full flex flex-col'>
                <div className='flex-grow sm:flex hidden' ></div>
                <div className='flex flex-row mt-[20vh]'>
                    <div className='flex-grow'></div>
                    <div className=' bg-white shadow-lg text-gray-600  shadow-[#c0a175] sm:h-[22rem]  w-[90vw] sm:w-[50vw]
                     rounded-lg sm:mr-[7vw] mr-[5vw] items-center flex justify-center flex-col py-8 '>
                        <div className='flex text-2xl flex-col items-center mb-12'>
                            <h1 className='sm:text-4xl pb-2 tracking-widest font-semibold text-blue-950'>Long Time No See</h1>
                            <h2 className='sm:text-3xl font-semibold tracking-wide text-blue-950 ' >Where've You Been !</h2>
                        </div>
                        <div className='flex flex-row sm:w-[35vw] items-center justify-between w-[85vw]'>
                            <p className='w-28'>Email: </p>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='h-10 sm:w-[28vw] w-full
                             border-blue-950 border-2 outline-none border-opacity-25 px-2' type="text" placeholder='your email' />
                        </div>
                        <div className='flex flex-row sm:w-[35vw] w-[85vw] items-center justify-between pt-4'>
                            <p className='w-28'>Password: </p>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className='h-10  w-full sm:w-[28vw]
                             border-blue-950 border-2 outline-none border-opacity-25 px-2' type={inputType} placeholder='your password' />
                            
                                <ToggleInput />

                        </div>

                        <button onClick={loginUser} className='bg-blue-950 text-white py-2 sm:w-[20vw] w-[35vw] mt-8 rounded-md font-semibold text-xl  shadow-gray-300 hover:shadow-xl '>Login</button>
                        {loginError && <p className='text-red-500 mt-1 font-bold text-lg '>{loginError}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
