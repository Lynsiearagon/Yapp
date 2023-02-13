import React from "react";
import './Navigation.css';
import { useLocation } from "react-router-dom";


const PersonalLinks = () => {
    const location = useLocation();

    let links; 
    let color;

    if (location.pathname === '/') {
        color = "white"
    } else {
        color = "black"
    };

    if ((location.pathname !== '/login') && (location.pathname !== '/signup')) {
        links = (
            <div id="personalLinksDiv">
                <span>
                    <a href="https://github.com/Lynsiearagon" 
                        target="_blank" 
                        rel="noreferrer">
                        <button className="personalLinks" style={{color: color}}>GitHub</button>
                    </a>
                    <a href="https://www.linkedin.com/in/lynsie-aragon-87156a157/" 
                        target="_blank" 
                        rel="noreferrer">
                        <button className="personalLinks" style={{color: color}}>LinkedIn</button>
                    </a>
                </span>
            </div>
        )

    }

    return (
        <div>
            {links}
        </div>
    )
}


export default PersonalLinks 