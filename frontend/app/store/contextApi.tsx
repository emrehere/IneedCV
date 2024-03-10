
import React, { createContext, useState, useEffect, useContext } from "react";

interface Info {
    name: string;
    title: string;
    email: string;
    city: string;
    phone: string;
    image: string;
    skills: string;
    skillsInfo: string;
    languages: string;
    languagesInfo: string;
    profile: string;
    profileInfo: string;
    projects: string;
    projectsInfo: string;
    education: string;
    educationInfo: string;
    experience: string;
    experienceInfo: string;
    save: boolean;
}

interface InfoContextProps {
    info: Info;
    setInfo: React.Dispatch<React.SetStateAction<Info>>;
    saveToDatabase: () => Promise<void>;
    deleteCV: () => Promise<void>;
    updateCV: () => Promise<void>;
    notRobot: () => void;
    robot: boolean;
    setRobot: React.Dispatch<React.SetStateAction<boolean>>;
    fetchCvDatas: () => void;
    initialInfo: Info;
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
    inputType: string;
    setInputType: React.Dispatch<React.SetStateAction<string>>;
    toggleInputType: () => void;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loading2: boolean;
    setLoading2: React.Dispatch<React.SetStateAction<boolean>>;
    checked: boolean;
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;   
}

const InfoContext = createContext<InfoContextProps>({} as InfoContextProps);



export function useInfo() {

    return useContext(InfoContext)

}


export function InfoProvider({ children }: { children: React.ReactNode }) {

    const [info, setInfo] = useState<Info>({
        name: "",
        title: "",
        email: "",
        city: "",
        phone: "",
        image: "",
        skills: "Skills",
        skillsInfo: "",
        languages: "Languages",
        languagesInfo: "",
        profile: "Profile",
        profileInfo: "",
        projects: "Projects",
        projectsInfo: "",
        education: "Education",
        educationInfo: "",
        experience: "Experience",
        experienceInfo: "",
        save: false,
    })

   

    const initialInfo: Info =  {
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

    const [token, setToken] = useState<string | null>(null);
    const [robot, setRobot] = useState<boolean>(false);
    const [fetchedUserId, setFetchedUserId] = useState<number | null>(null);
    const [inputType, setInputType] = useState<string>("password");
    const [loading, setLoading] = useState<boolean>(false);
    const [loading2, setLoading2] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);


    function notRobot() {
        setInfo({ ...info, save: true })
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

        fetch('http://server.unurluworks.com/mycv', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${parsedToken}`,
            }
        })
            .then(response => response.json())
            
            .then(data => {
                console.log('CvDatas:', data[0].user.user);
                setInfo(data[0].user.user)
               
            })
            .catch(error => {
                console.error('Error during fetchCvDatas:', error);
                          
            });
               
    }





    async function saveToDatabase() {
        setLoading(true)
        setRobot(false)       
        const token = localStorage.getItem('token');
        const parsedToken = token ? JSON.parse(token) : null;

        if (!parsedToken) {
            // Handle the case where there is no valid token (optional)
            console.warn('No valid token found.');
            return;
        }

        try {
            console.log('Sending data: check here', info);
            
            const response = await fetch('http://server.unurluworks.com/templates', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${parsedToken}`,
                },
                body: JSON.stringify(info), // Include user_id in the body
                
            });

            if (response.ok) {
                console.log('Data saved successfully from frontend');                           
                fetchCvDatas()

            } else {
                console.error('Failed to save data:', response.statusText);
                    
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false)
            setChecked(false)    
        }
    }

    async function deleteCV() {
        setLoading2(true)
        console.log("delteCV", fetchedUserId)

        const token = localStorage.getItem('token');
        const parsedToken = token ? JSON.parse(token) : null;

        if (!parsedToken) {
            // Handle the case where there is no valid token (optional)
            console.warn('No valid token found.');
            return;
        }

        console.log("parsedToken from delteeCV", parsedToken)

        try {

            const response = await fetch(`http://server.unurluworks.com/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${parsedToken}`,
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);

        } catch (error) {

            console.error('Error:', error);
            // Handle error on the frontend
        }  finally {
            setLoading2(false)
        }

        setInfo(initialInfo)
    }





    async function updateCV() {
        setLoading(true)
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
            const response = await fetch(`http://server.unurluworks.com/update`, {

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
        finally {
            setLoading(false)
        }
        fetchCvDatas()
    }

    

    const toggleInputType = () => {
        setInputType("text");
        setTimeout(() => {
            setInputType("password");
        }, 800);
    };



    return (
        <InfoContext.Provider value={{
            info, setInfo, saveToDatabase, deleteCV, updateCV,
            notRobot, robot, setRobot, fetchCvDatas, initialInfo,
            token, setToken, inputType, setInputType, toggleInputType,
            loading, setLoading, loading2, setLoading2, checked, setChecked
        }}>
            {children}
        </InfoContext.Provider>
    )
}