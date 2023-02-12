import React from "react";
import './SplashPage.css' 
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


const Categories = () => {
    const location = useLocation();

    if (location.pathname === '/') 
    return (
        <div id="categoryWrapper">
            <h1 className="splashTitles">Categories</h1>

    {/* Once the restos are set up, map through and populate info */}

            <div >
                <ul className="catItems">
                    <li><button>Cat 1</button></li>
                    <li><button>Cat 2</button></li>
                    <li><button>Cat 3</button></li>
                    <li><button>Cat 4</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Categories