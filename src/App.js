import React from "react";
import ColorChanger from "./Components/UI/Screens/ColorChanger";
import LoginScreen from "./Components/UI/Screens/LoginScreen";
import ProfileScreen from "./Components/UI/Screens/ProfileScreen";

import './Components/UI/styles/App.css'
import { useSelector } from "react-redux";
const App = () => {

    const selector = useSelector(state => state.theme.value.theme)

    // console.log(selector);
    return(
        <div style={{ background: selector }}>
            <h1>Hi!</h1>
            <ProfileScreen/>
            <LoginScreen/>
            <ColorChanger/>
        </div>
    )
}

export default App