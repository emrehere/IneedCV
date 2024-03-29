"use client"
import React, { useState, useEffect } from 'react'
import ChooseCVbutton from '@/app/components/chooseCVbutton';
import { useInfo } from '../../store/contextApi';
import { useRouter } from 'next/navigation';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from 'next/image';

function Page() {

  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");

  const [slideIndex, setSlideIndex] = useState(1);


  const { token, setToken } = useInfo()

  const router = useRouter()

  useEffect(() => {

    const mytoken = localStorage.getItem('token') ?? '';
    console.log(mytoken)
    console.log("token checked")
    setToken(mytoken)
    if (!mytoken) {
      router.push('/')
    }

  }, [router, token])

  const clickImage = (index: number) => {
    const normalStyle = ""
    const clickedStyle = "scale-110 mx-20 mb-6 flex"

    if (index === 1) {
      setImg1(clickedStyle)
      setImg2(normalStyle)
      setImg3(normalStyle)
    } else if (index === 2) {
      setImg1(normalStyle)
      setImg2(clickedStyle)
      setImg3(normalStyle)
    }
    else if (index === 3) {
      setImg1(normalStyle)
      setImg2(normalStyle)
      setImg3(clickedStyle)
    }
  }

  function arrowLeftFunc() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else {
      setSlideIndex(3)
    }
  }

  function arrowRightFunc() {
    if (slideIndex !== 3) {
      setSlideIndex(slideIndex + 1)
    } else {
      setSlideIndex(1)
    }
  }




  return (
    <div>
      {
        token && (
          <div className='bg-[#070717] min-h-screen  overflow-x-hidden'>
            <div className='flex justify-center text-lg sm:text-3xl font-bold my-4 sm:my-12
             text-white sm:w-[90vw] w-[80vw] mx-auto' >
              <p>Choose your CV and Get it printed in less than 2 minutes !</p>
            </div>
            <div className='w-[100vw] bg-blue-50 h-[75vh]  sm:pt-[10vh] sm:h-[30rem] '>

              <div className=' hidden sm:flex justify-center mx-auto  mt-4 '>
                <div className='relative'>
                  <Image width={215} height={300} key={1} onClick={() => clickImage(1)} className={`${img1} object-cover `}
                    src="/2.webp" alt=" cv 2 " />
                  <div className={img1 === "" ? "hidden" : "flex justify-center "}>
                    <ChooseCVbutton hrefSend="/pages/create2" />
                  </div>
                </div>
                <div className='relative'>
                  <Image width={215} height={300} key={2} onClick={() => clickImage(2)} className={`${img2} object-cover `}
                    src="/1.webp" alt=" cv 1 " />
                  <div className={img2 === "" ? "hidden" : "flex justify-center "}>
                    <ChooseCVbutton hrefSend="/pages/templates" />
                  </div>
                </div>
                <div className='relative'>
                  <Image width={215} height={300} key={3} onClick={() => clickImage(3)} className={`${img3} object-cover `}
                    src="/3.webp" alt=" cv 3 " />
                  <div className={img3 === "" ? "hidden" : "flex justify-center "}>
                    <ChooseCVbutton hrefSend="/pages/create3" />
                  </div>

                </div>
              </div>

              <div className=' sm:hidden flex items-center  mx-auto  pt-[10vh] pb-[10vh] bg-blue-50  '>
                <div onClick={arrowLeftFunc} className='text-5xl absolute left-2 text-red-500 '>
                  <FaArrowAltCircleLeft />
                </div>
                <div className={slideIndex === 1 ? "flex flex-col relative w-full h-full items-center justify-center" : "hidden"}>
                  <Image width={280} height={400} className=" object-cover" src="/2.webp" alt=" cv 2 " />
                  <div className="flex justify-center">
                    <ChooseCVbutton hrefSend="/pages/create2" />
                  </div>
                </div>
                <div className={slideIndex === 2 ? "relative flex flex-col w-full h-full items-center justify-center" : "hidden"} >
                  <Image width={280} height={400} className="object-cover" src="/1.webp" alt=" cv 1 " />
                  <div className="flex justify-center mt-4">
                    <ChooseCVbutton hrefSend="/pages/templates" />
                  </div>
                </div>
                <div className={slideIndex === 3 ? "relative flex flex-col w-full h-full items-center justify-center" : "hidden"}>
                  <Image width={280} height={400} className="object-cover  " src="/3.webp" alt=" cv 3 " />
                  <div className="flex justify-center ">
                    <ChooseCVbutton hrefSend="/pages/create3" />
                  </div>
                </div>
                <div onClick={arrowRightFunc} className='text-5xl flex justify-end w-[90vw] absolute right-2 text-red-500 '>
                  <FaArrowAltCircleRight />
                </div>

              </div>

            </div>
          </div>
        )
      }
    </div>
  )
}

export default Page
