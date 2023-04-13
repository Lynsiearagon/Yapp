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
    };

    const foodCategories = [
        ['Pizza', <FaPizzaSlice />], ['Bars', <FaCocktail />], ['Seafood', <FaFish />],
        ['Coffee', <FaCoffee />], ['Steak', <GiSteak />], ['Burgers', <FaHamburger />],
        ['Brunch', <FaBacon />]
    ];

    if (location.pathname === '/') 

    return (
        <div id="categorySectionWrapper">
            <h1 className="splashTitles">Categories</h1>

            <div id="categoryButtonGrid">
                { foodCategories.map((category) => {
                    return (
                        <Link to={`/restaurants?cuisine=${category[0]}`} 
                            onClick={scrollToTop} 
                            className="catButtonDiv"
                            key={category[0]}
                            >
                            <div className="catButtonDiv">
                                <button className="catButton"> 
                                    {category[1]} 
                                    <p>{category[0]}</p>
                                </button>
                            </div>
                        </Link>
                    )})
                }
                <Link to="/restaurants" onClick={scrollToTop} className="catButtonDiv"> 
                    <div className="catButtonDiv">
                        <button className="catButton">
                            <CiCircleMore /> 
                            <p>More</p>
                        </button>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Categories;