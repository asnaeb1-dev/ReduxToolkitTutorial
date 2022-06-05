import React from "react";
import { useDispatch } from 'react-redux'
import {  login, logout  } from '../../Data/features/user'

const LoginScreen = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(
            login({
                name: "Dipu", 
                age: 23, 
                email: "ded@gmail.com"
            }))
    }


    return(
        <div>
            <button onClick={() => handleClick()}>Login user</button>
            <button onClick={() => dispatch(logout()) } >Logout</button>
        </div>
    )
}

export default LoginScreen