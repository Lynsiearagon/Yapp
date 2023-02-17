import React from "react";
import './SplashPage.css' 
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaFish } from "react-icons/fa";
import { FaBacon } from "react-icons/fa";
import { GiSteak } from "react-icons/gi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CiCircleMore } from "react-icons/ci";


const Categories = () => {
    const location = useLocation();

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    if (location.pathname === '/') 
    return (
            <div id="categorySectionWrapper">
                <h1 className="splashTitles">Categories</h1>

                <div id="categoryButtonGrid">
                    <div className="catButtonDiv">
                        <button className="catButton"> 
                            <FaPizzaSlice /> 
                            <p>Pizza</p>
                        </button>
                    </div>
                    <div className="catButtonDiv">
                        <button className="catButton">
                            <FaCocktail />
                            <p>Bar</p>
                        </button>
                    </div>
                    <div className="catButtonDiv">
                        <button className="catButton">
                            <FaFish />
                            <p>Sea Food</p>
                        </button>
                    </div>
                    <div className="catButtonDiv">
                        <button className="catButton">
                            <FaCoffee />
                            <p>Coffee</p>
                        </button>
                    </div>
                    <div className="catButtonDiv">
                        <button className="catButton">
                            <GiSteak />
                            <p>Steak</p>
                        </button>
                    </div>
                    <div className="catButtonDiv">
                        <button className="catButton">
                            <FaHamburger />
                            <p>Hamburger</p>
                        </button>
                    </div>
                    <div className="catButtonDiv">
                        <button className="catButton">
                            <FaBacon />
                            <p>Brunch</p>
                        </button>
                    </div>
                    <div className="catButtonDiv">
                        <button className="catButton">
                            <Link to="/restaurants" onClick={scrollToTop}> <CiCircleMore /> </Link>
                            <p>More</p>
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Categories;