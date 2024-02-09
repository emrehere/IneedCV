import React,{createContext,useState,useEffect, useContext} from "react";

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


    async function saveToDatabase() {
        try {
            setInfo({ ...info, save: true });
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

    
      
    

    return (
        <InfoContext.Provider value={{info,setInfo, saveToDatabase, deleteCV, updateCV}}>
            {children}
        </InfoContext.Provider>
    )
}