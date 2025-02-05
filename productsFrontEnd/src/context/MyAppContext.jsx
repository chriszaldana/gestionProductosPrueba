/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


export const MyAppContext = createContext();

export const MyAppProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    const getUsersApi = async () => {

        if(!token) return;

        try {
            const url = 'http://127.0.0.1:8000/api/user';
            const response = await axios.get(url,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        console.log("Usuario autenticado:",response.data.user);
        setUser(response.data.user);
        } catch (error) {
            console.error("Error obteniendo el usuario:", error);
            
        }
      }

      useEffect(() => {
        getUsersApi();
    }, [token]);

    const login =(newToken)=>{
      localStorage.setItem("token", newToken);
      setToken(newToken)
    }

    const logout = ()=>{
      localStorage.removeItem("token");
      setToken("")
      setUser(null)
    }


    return (
        <MyAppContext.Provider value={{user, token, login, logout}}>
            {children}
        </MyAppContext.Provider>
    )
}