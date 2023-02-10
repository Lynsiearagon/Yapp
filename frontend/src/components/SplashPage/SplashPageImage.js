import React from "react"
import './SplashPage.css'
import { useLocation } from 'react-router-dom'


const SplashPageImage = () => {
    const location = useLocation();
    
    return (
        <div>
            {location.pathname === '/' ? 
            <img src={require("./../../images/bbq.jpg")} alt="tapas on table" id="tapasImg"/> :
            null }
        </div>
    )
}

export default SplashPageImage