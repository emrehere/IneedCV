"use client"
import React, { useState } from 'react'
import ChooseCVbutton from '@/app/components/chooseCVbutton';

function Page() {

  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");

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



  return (
    <div>
      <p>Choose your CV and Get it printed in less than 2 minutes</p>
      <div className='w-[100vw]'>

        <div className='flex justify-center mx-auto w-[70vw] mt-20 '>
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

      </div>
    </div>
  )
}

export default Page
