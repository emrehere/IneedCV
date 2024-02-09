import React,{createContext,useState,useEffect, useContext} from "react";
import { flushSync } from "react-dom";

const InfoContext = createContext();

export function useInfo(){

    return useContext(InfoContext)
   
}


export function InfoProvider({children}) {

    const [info,setInfo] = useState({

        name: "",
        title: "",
        email: "",
        city: "",
        phone: "",   
        image: null,
        skills: "",
        skillsInfo: "",
        languages: "",
        languagesInfo: "",
        profile: "",
        profileInfo: "",
        projects: "",
        projectsInfo: "",
        education: "",
        educationInfo: "",
        save: false,       
    })

        const [robot, setRobot] = useState(false)

    function notRobot() {
        setInfo({ ...info, save: true })
        setRobot(true)
    }

    

   
    
    async function saveToDatabase() {
        setRobot(false)
        try {          
            console.log('Sending data:', info);
            const response = await fetch('http://localhost:8000/templates', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info),
            });
    
            if (response.ok) {
                console.log('Data saved successfully from frontend');
            } else {
                console.error('Failed to save data:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function deleteCV() {
        
    }

    async function updateCV() {
        
    }


   
   function fetchCvDatas() {
        fetch('http://localhost:8000/mycv')
        .then(response => response.json())
        .then(data => {
            if(data[0]?.user){
                setInfo(data[0]?.user)
                   
            }
        })
    }

    
      
    

    return (
        <InfoContext.Provider value={{info,setInfo, saveToDatabase, deleteCV, updateCV,
         fetchCvDatas, notRobot, robot, setRobot}}>
            {children}
        </InfoContext.Provider>
    )
}