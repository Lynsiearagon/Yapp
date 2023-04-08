import React from 'react';
// import { useState } from "react";
// import { useHistory } from "react-router-dom";


const RestaurantIndexItemButton = ({cuisine}) => {
    // const history = useHistory();
    // const [cuisineSearch, setCuisineSearch] = useState('');
    
    let cuisineTypes;

    if (!cuisine) {
        return <div></div>
    } else {
        cuisineTypes = cuisine.split(",");
    }

    // const handleClick = (cuisineSearch) => {
    //     setCuisineSearch(cuisineSearch);

    //     history.push({
    //         pathname: `/restaurants`,
    //         queryString: `?cuisine=${cuisineSearch}`
    //     })
    // }


    return (

        cuisineTypes.map((cuisineType) => {
            return (
                <button id="cuisineFilterButton" 
                    key={cuisineType}
                    // value={cuisineSearch}
                    // onClick={handleClick(cuisineSearch)}
                    >
                    {cuisineType}
                </button>
            )
        })
        
    )
}

export default RestaurantIndexItemButton;