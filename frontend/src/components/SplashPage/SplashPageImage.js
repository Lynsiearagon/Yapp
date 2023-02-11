import React from "react"
import './SplashPage.css'
import { useLocation } from 'react-router-dom'


const SplashPageImage = () => {
    const location = useLocation();
    
    return (
        <div>
            {location.pathname === '/' ? 
            
            <div id="imageRotation" className="fadein">
                <img src={require("./../../images/tacos2.jpg")} alt="place of tacos" id="tacos2"/>
                <img src={require("./../../images/breakfast.jpg")} alt="table of breakfast" id="breakfast"/> 
                <img src={require("./../../images/paella.jpg")} alt="paella and wine" id="paella"/>
            </div> :
            null }
        </div>
    )
}

export default SplashPageImage