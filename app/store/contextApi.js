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


    
      
    

    return (
        <InfoContext.Provider value={{info,setInfo}}>
            {children}
        </InfoContext.Provider>
    )
}