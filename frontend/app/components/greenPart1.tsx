"use client"
import { useInfo } from "../store/contextApi";
import Image from "next/image";



export default function GreenPart() {

    const { info, setInfo } = useInfo();
      const handleFileUpload = async (e : any) => {
        const file = e.target.files[0];
        console.log("file",file)
        const base64 = await convertToBase64(file);
        console.log("base64",base64)
        setInfo({ ...info, image: base64 as string });
      }

    return (
        <div>
            <div className="border-gray-500 border-2 border-opacity-40  flex flex-row ">
                <div className="w-[30%] px-8  flex items-center border-2 border-gray-500 border-opacity-40 " >
                    <div className='rounded-xl'>
                        {info?.image && (
                            <Image height={120} width={120} src={info?.image} alt="Uploaded Image" className=' object-cover mt-2 rounded-xl' />
                        ) }


                        <input type="file" accept="image/*" onChange={handleFileUpload} />


                    </div>


                </div>
                <div className="w-[70%] text-[10px] sm:text-[14px]  border-2 border-gray-500 border-opacity-40  flex flex-col space-y-1 justify-center items-center" >

                    <input onChange={(e) => setInfo({ ...info, name: e.target.value })}
                        className="w-[50%] font-bold text-3xl px-2 text-gray-800" type="text"
                        placeholder="Full Name..."
                        value={info?.name} />
                    <input value={info?.title} onChange={(e) => setInfo({ ...info, title: e.target.value })} className="w-[50%] font-bold text-2xl px-2 text-gray-800" type="text" name="" placeholder="Job Title..." />

                    <div className="flex flex-row w-[50%] pt-8 font-semibold justify-between
                         items-center text-sm text-gray-700">
                        <p className="mr-2">Phone Number: </p>
                        <input value={info?.phone} onChange={(e) => setInfo({ ...info, phone: e.target.value })} className="w-[65%] h-8 px-2 text-gray-700" type="text" name="" placeholder="Phone..." />
                    </div>
                    <div className="flex flex-row w-[50%] text-gray-700 items-center font-semibold text-sm justify-between">
                        <p className="mr-2">Email: </p>
                        <input value={info?.email} onChange={(e) => setInfo({ ...info, email: e.target.value })} className="w-[85%] h-8 px-2 text-gray-700" type="text" name="" placeholder="Email..." />
                    </div>
                    <div className="flex flex-row w-[50%] text-gray-700 items-center font-semibold text-sm justify-between">
                        <p className="mr-2">City: </p>
                        <input value={info?.city} onChange={(e) => setInfo({ ...info, city: e.target.value })} className="w-[85%] h-8 px-2 text-gray-700" type="text" name="" placeholder="City..." />
                    </div>

                </div>
            </div>
        </div>
    )
}

function convertToBase64(file : any) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }