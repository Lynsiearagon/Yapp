import React from 'react';


const RestaurantAmenitiesListings = ({name}) => {

    const names = name.split(", ")
    
    return (

        names.map((n) => {
            return (
                <div id="amenitiesListing" key={n}>{n}</div>
            )
        })
        
    )
}

export default RestaurantAmenitiesListings;