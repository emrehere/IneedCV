import Image from "next/image";
import Link from "next/link";



export default function Home() {



  return (
    <main>
      <div >
        
      <div className="flex flex-col items-center justify-center bg-blue-100 h-[75vh] min-h-[350px] w-full">
     <div className="w-[70vw] flex items-center flex-col bg-blue-900 bg-opacity-10 py-8
      rounded-lg shadow-lg shadow-gray-400">
     <h1 className="text-xl text-blue-900 ">Online Resume Builder</h1>
     <div className="mt-2 w-[70vw]  flex items-center flex-col text-4xl font-bold tracking-widest ">
     <p className="">Only 2% of resumes make it past the </p>
      <p> first round. Be in the top 2%</p>
      </div>
      <div className="w-[55vw] flex items-center flex-col text-xl  mt-2">
         <p>Use professional field-tested resume templates that follow the exact </p>
          <p>‘resume rules’ employers look for. Easy to use and done within</p>
           <p>minutes - try now for free!</p>
            <Link href={"/templates"} >
            <button className="bg-blue-600 text-white px-8 py-4 mt-4 rounded-xl font-semibold
            hover:bg-white hover:border-2 border-blue-600 hover:text-blue-600 " >Create My Resume</button>
            </Link>
            <div>    
            </div>        
            </div>
         </div>
     </div>
   
     </div>
   
    </main>
  );
}
