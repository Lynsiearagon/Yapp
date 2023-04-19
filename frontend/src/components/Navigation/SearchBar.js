import React, { useEffect, useState } from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import './Navigation.css';


const SearchBar = () => {
    const location = useLocation();
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState('');
    const clearFilterButton = document.getElementById("clearFiltersButton");


    useEffect(() => {
        if (clearFilterButton) {
            setSearchQuery('')
        } 
    }, [clearFilterButton]);


    let searchBarShadow; 

    if (location.pathname !== '/') {
        searchBarShadow = "0px 0px 20px 0px rgb(195, 193, 193)"
    };


    if ((location.pathname !== '/login') && (location.pathname !== '/signup')) {

        return (
            <>
            <div id="searchBarDiv">
                <input 
                    type="text" 
                    id="searchBar" 
                    placeholder="tacos, cheap dinner, Max's"
                    style={{boxShadow: searchBarShadow}}
                    autoComplete="off"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' ? history.push(`/restaurants?query=${searchQuery}`) : null}
                    />
                <Link to={`/restaurants?query=${searchQuery}`} 
                    id="searchButton"
                    > 
                    <HiOutlineMagnifyingGlass
                        alt="Magnifying glass" 
                        id="magGlass"
                        />
                </Link>
            </div>
            </>
        )
    } else {
        return null;
    };

};

export default SearchBar;