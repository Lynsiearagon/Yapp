import './RestaurantIndexPage.css'
import * as restaurantActions from '../../store/restaurants'
import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RestaurantIndexItemButton from './RestoIndexItemButton';
import { BsStarFill } from 'react-icons/bs'
import RestoHours from './RestoHours'


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
                    <img src="https://www.willflyforfood.net/wp-content/uploads/2021/09/moroccan-food-shakshouka.jpg" alt="image placeholder" id="restoImage"/>                      
                    <ul id="restoListings" key={resto.id}>
                        <h2 id="restoName">{i+1}. {resto.restaurantName}</h2>
                        <li> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /> </li>
                        <li><RestaurantIndexItemButton name={resto.cuisine} /> • {resto.price} • {resto.neighborhood}</li>
                        <li><RestoHours  times={resto.hours} /></li>
                        <li>My husband and I happened to stumble across this place Saturday night and it was AMAZING!!!</li>
                        <li><RestaurantIndexItemButton name={resto.amenities} /></li>
                    </ul>
                </div>  
            )
        })
    );
}


export default RestaurantIndexItem;