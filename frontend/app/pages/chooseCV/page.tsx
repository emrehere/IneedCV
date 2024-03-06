"use client"
import React, { useState, useEffect } from 'react'
import ChooseCVbutton from '@/app/components/chooseCVbutton';
import { useInfo } from '../../store/contextApi';
import { useRouter } from 'next/navigation';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Page() {

  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");

  const [slideIndex, setSlideIndex] = useState(1);

  const { token, setToken} = useInfo()

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
    const clickedStyle = "scale-125 mx-20 mb-12 flex"

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

  console.log(slideIndex)


  return (
    <div>
      {
        token && (
          <div className='bg-[#070717] min-h-screen pb-[10vh] overflow-x-hidden'>
            <div className='flex justify-center text-2xl sm:text-3xl font-bold my-12 text-white w-[90vw] mx-auto' >
              <p>Choose your CV and Get it printed in less than 2 minutes !</p>
            </div>
            <div className='w-[100vw] bg-blue-50 sm:h-[90vh] h-[90vh]'>

              <div className=' hidden sm:flex justify-center mx-auto w-[70vw] pt-[10vh] mt-4 '>
                <div>
                  <img key={1} onClick={() => clickImage(1)} className={`${img1} h-[60vh]`} src="/2.webp" alt=" cv 2 " />
                  <div className={img1 === "" ? "hidden" : "flex justify-center "}>
                    <ChooseCVbutton hrefSend="/pages/create2" />
                  </div>
                </div>
                <div>
                  <img key={2} onClick={() => clickImage(2)} className={`${img2} h-[62vh] -mt-[2vh]`} src="/1.webp" alt=" cv 1 " />
                  <div className={img2 === "" ? "hidden" : "flex justify-center "}>
                    <ChooseCVbutton hrefSend="/pages/templates" />
                  </div>
                </div>
                <div>
                  <img key={3} onClick={() => clickImage(3)} className={`${img3} h-[60vh]`} src="/3.webp" alt=" cv 3 " />
                  <div className={img3 === "" ? "hidden" : "flex justify-center "}>
                    <ChooseCVbutton hrefSend="/pages/create3" />
                  </div>

                </div>
              </div>

              <div className=' sm:hidden flex items-center  mx-auto  pt-[10vh]  '>
                  <div className='text-5xl absolute left-2 text-red-500 '>
                  <FaArrowAltCircleLeft onClick={arrowLeftFunc} />
                  </div>
                  <div className= {slideIndex === 1 ?  "flex flex-col" : "hidden" }>
                  <img className="w-full" src="/2.webp" alt=" cv 2 " />
                  <div className="flex justify-center">
                    <ChooseCVbutton hrefSend="/pages/create2" />
                  </div>
                </div>
                <div className= {slideIndex === 2 ?  "flex flex-col" : "hidden" } >
                  <img className="w-full" src="/1.webp" alt=" cv 1 " />
                  <div className="flex justify-center mt-4">
                    <ChooseCVbutton hrefSend="/pages/templates" />
                  </div>
                </div>
                <div className= {slideIndex === 3 ?  "flex flex-col" : "hidden"  }>
                  <img  className="w-full" src="/3.webp" alt=" cv 3 " />
                  <div className="flex justify-center ">
                    <ChooseCVbutton hrefSend="/pages/create3" />
                  </div>
                  </div>
                  <div className='text-5xl flex justify-end w-[90vw] absolute right-2 text-red-500 '>
                  <FaArrowAltCircleRight onClick={arrowRightFunc} />
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
