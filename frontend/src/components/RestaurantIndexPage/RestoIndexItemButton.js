import React from 'react';
import { Link } from 'react-router-dom';


const RestaurantIndexItemButton = ({cuisine}) => {

    let cuisineTypes;

    if (!cuisine) {
        return <div></div>
    } else {
        cuisineTypes = cuisine.split(", ");
    }


    return (

        cuisineTypes.map((cuisineType) => {
            return (
                <Link to={`/restaurants?cuisine=${cuisineType}`} 
                    id="cuisineFilterButton"
                    key={cuisineType}
                    >
                        {cuisineType}
                </Link>
            )
        })
        
    )
}

export default RestaurantIndexItemButton;