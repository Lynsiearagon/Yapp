import './RestaurantIndexPage.css'
import * as restaurantActions from '../../store/restaurants'
import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const RestaurantIndexItem = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(restaurantActions.getRestaurants);

    useEffect(() => {
        dispatch(restaurantActions.fetchRestaurants())
    }, []);

    return (   

        restaurants.map((resto, i) => {
            return (
                <div id='imageAndRestoInfo'>   
                    <img src="" alt="image placeholder" id="restoImage"/>                      
                    <ul id="restoListings" key={resto.id}>
                        <h2 id="restoName">{i+1}. {resto.restaurantName}</h2>
                        <li>star placeholder</li>
                        <li><span>{resto.cuisine} {resto.price} {resto.neighborhood}</span></li>
                        <li>hours placeholder</li>
                        <li>Review snippet placeholder</li>
                        <li>{resto.amenities}</li>
                    </ul>
                </div>  
            )
        })
    );
}


export default RestaurantIndexItem;