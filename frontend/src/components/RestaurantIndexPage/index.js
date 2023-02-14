import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './RestaurantIndexPage.css'
import * as restaurantActions from '../../store/restaurants'
import { useSelector } from 'react-redux'



const RestaurantIndexPage = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(restaurantActions.getRestaurants);

    useEffect(() => {
        dispatch(restaurantActions.fetchRestaurants())
    }, []);

    return (

        <div id="restoIndexPageWrapper">

            <div id="filtersSideBar" className="restoIdxColumn">
                Filter Placeholder
            </div>

            <div id="indexListingsDiv" className="restoIdxColumn">
                {
                    restaurants.map((resto) => {
                        return (<div>{resto.restaurantName}</div>)
                    })
                }
            </div>

            <div id="mapDiv" className="restoIdxColumn">
                Map placeholder
            </div>

        </div>

    )


}


export default RestaurantIndexPage