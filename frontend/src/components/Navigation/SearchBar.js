import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import './Navigation.css';


const SearchBar = () => {
    const location = useLocation();

    let showSearchBar;
    let shadow; 

    if (location.pathname !== '/') {
        shadow = "0px 0px 20px 0px rgb(195, 193, 193)"
    };

    if ((location.pathname !== '/login') && (location.pathname !== '/signup')) {
        showSearchBar = (
            <>
                <input 
                    type="text" 
                    id="searchBar" 
                    placeholder="tacos, cheap dinner, Max's"
                    style={{boxShadow: shadow}}/>
                <button type="submit" id="searchButton"> 
                    <img src={require("../../images/magnifyingGlass.png")} alt="search" id="magGlass"/>
                </button>
            </>
        )
    };

    return (
        <div id="searchBarDiv">
            {showSearchBar}
        </div>
    )

}

export default SearchBar