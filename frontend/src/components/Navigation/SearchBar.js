import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { getRestaurants } from '../../store/restaurants'
import { fetchRestaurants } from "../../store/restaurants";
import './Navigation.css';


const SearchBar = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    let searchBarShadow; 

    if (location.pathname !== '/') {
        searchBarShadow = "0px 0px 20px 0px rgb(195, 193, 193)"
    }

    if ((location.pathname !== '/login') && (location.pathname !== '/signup')) {

        return (
            <>
            <div id="searchBarDiv">
                <input 
                    type="text" 
                    id="searchBar" 
                    placeholder="tacos, cheap dinner, Max's"
                    style={{boxShadow: searchBarShadow}}
                    autoComplete="off"/>
                <button type="submit" id="searchButton" > 
                    <img src={require("../../images/magnifyingGlass.png")} 
                        alt="Magnifying glass" 
                        id="magGlass" />
                </button>
            </div>
            </>
        )
    } else {
        return null;
    };

};

export default SearchBar;