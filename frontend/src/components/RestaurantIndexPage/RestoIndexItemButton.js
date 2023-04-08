import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { fetchRestaurantsWithQueryString } from '../../store/restaurants';


const RestaurantIndexItemButton = ({cuisine}) => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRestaurantsWithQueryString(location.search))
    }, [dispatch, location.search])
    
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