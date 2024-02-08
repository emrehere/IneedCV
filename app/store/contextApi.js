import React,{createContext,useState,useEffect, useContext} from "react";

const InfoContext = createContext();

export function useInfo(){

    return useContext(InfoContext)
   
}


export function InfoProvider({children}) {

    const [info, setInfo] = useState("try")

  

    return (
        <InfoContext.Provider value={{info, setInfo}}>
            {children}
        </InfoContext.Provider>
    )
}