import React,{createContext,useState,useEffect, useContext} from "react";

const InfoContext = createContext();

export function useInfo(){

    return useContext(InfoContext)
   
}


export function InfoProvider({children}) {

    const [info,setInfo] = useState({

        name: "",
        surname: "",
        email: "",
        phone: "",
        title: "",
        description: "",
        image: null,
        skills: "",
        languages: "",
        profile: "",
        profileInfo: "",
        projects: "",
        projectsInfo: "",
        education: "",
        educationInfo: "",
        works: "",
        worksInfo: "",
    })

    return (
        <InfoContext.Provider value={{ info, setInfo }}>
            {children}
        </InfoContext.Provider>
    )
}