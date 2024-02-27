import { set } from "lodash";
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
        image: "",
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
        experience: "",
        experienceInfo: "",
        save: false,       
    })

    const initialInfo = {
        name: "",
        title: "",
        email: "",
        city: "",
        phone: "",
        image: "",
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
        experience: "",
        experienceInfo: "",
        save: false,
    }



    const [robot, setRobot] = useState(false)
    const [fetchedUserId, setFetchedUserId] = useState(null);


    function notRobot() {
        setInfo({ ...info, save: true})
        setRobot(true)

    }

  


    function fetchCvDatas() {
        const token = localStorage.getItem('token');
        const parsedToken = token ? JSON.parse(token) : null;
    
        if (!parsedToken) {
            // Handle the case where there is no valid token (optional)
            console.warn('No valid token found.');
            return;
        }
    
        fetch('http://localhost:8000/mycv', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${parsedToken}`,
            }
        })
        .then(response => response.json())
        .then(data => {
            setInfo(data[0].user.user)
            setFetchedUserId(data[0].user.userId)        
        })
        .catch(error => {
            console.error('Error during fetchCvDatas:', error);
            // Handle the error as needed
        });
    }
    
    

   
    
    async function saveToDatabase() {   

        setRobot(false)  

        const token = localStorage.getItem('token');
        const parsedToken = token ? JSON.parse(token) : null;
    
        if (!parsedToken) {
            // Handle the case where there is no valid token (optional)
            console.warn('No valid token found.');
            return;
        }

        try {          
            console.log('Sending data:', info);
            const response = await fetch('http://localhost:8000/templates', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${parsedToken}`,                
                },
                body: JSON.stringify( info), // Include user_id in the body
            });
    
            if (response.ok) {
                console.log('Data saved successfully from frontend');
                setInfo({ ...info, save: true })
                fetchCvDatas()
            } else {
                console.error('Failed to save data:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function deleteCV() {
        try {
            
            const response = await fetch(`http://localhost:8000/delete/${id}`, {
                method: 'DELETE',
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            console.log('Success:', data);
         
            // Handle success on the frontend
            
        } catch (error) {
            
            console.error('Error:', error);
            // Handle error on the frontend
        }
        
        setInfo(initialInfo)       
    }

   
  
  

    async function updateCV() {

        console.log("updateCV", fetchedUserId)

        const token = localStorage.getItem('token');
        const parsedToken = token ? JSON.parse(token) : null;
    
        if (!parsedToken) {
            // Handle the case where there is no valid token (optional)
            console.warn('No valid token found.');
            return;
        }

        console.log("parsedToken from updateCV", parsedToken)
        
        try {        
            const response = await fetch(`http://localhost:8000/update/${fetchedUserId}`, {
                
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${parsedToken}`,   
                },
                body: JSON.stringify(info),
                
            });
          
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log("it works", info)
            setInfo({ ...info, save: true })
            const data = await response.json();
            console.log('Success JsonResponce:', data);            
        } catch (error) {
            console.error('Error:', error);
            // Handle error on the frontend
        }
        fetchCvDatas()
    }
    

   
    
      
    

    return (
        <InfoContext.Provider value={{info,setInfo, saveToDatabase, deleteCV, updateCV,
         notRobot, robot, setRobot, fetchCvDatas }}>
            {children}
        </InfoContext.Provider>
    )
}