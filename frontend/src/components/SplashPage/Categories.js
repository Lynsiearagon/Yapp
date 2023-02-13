import React from "react";
import './SplashPage.css' 
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


const Categories = () => {
    const location = useLocation();

    if (location.pathname === '/') 
    return (
            <div id="categorySectionWrapper">
                <h1 className="splashTitles">Categories</h1>

        {/* Once the restos are set up, map through and populate info */}

                <div id="categoryButtonGrid">
                    <div className="catButtonDiv"><button className="catButton">cat 1</button></div>
                    <div className="catButtonDiv"><button className="catButton">cat 2</button></div>
                    <div className="catButtonDiv"><button className="catButton">cat 3</button></div>
                    <div className="catButtonDiv"><button className="catButton">cat 4</button></div>
                    <div className="catButtonDiv"><button className="catButton">cat 5</button></div>
                    <div className="catButtonDiv"><button className="catButton">cat 6</button></div>
                    <div className="catButtonDiv"><button className="catButton">cat 7</button></div>
                    <div className="catButtonDiv"><button className="catButton">cat 8</button></div>
                </div>
            </div>
    )
}

export default Categories