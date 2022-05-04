import React, { useEffect, createContext } from 'react';
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

export const UserProvider = (props) => {
  // let navigate;
  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //    navigate= useNavigate();
  // }, [])
  


    // const handleNavigation = (path)=>{
    //   navigate(path)
    // }

    const sayHello = () =>{
      console.log('hello')
    }

  return (
    <UserContext.Provider value={{

        sayHello
    }}>
        {props.children}
    </UserContext.Provider>
  )
}


