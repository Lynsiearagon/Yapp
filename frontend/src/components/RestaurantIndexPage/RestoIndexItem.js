import './RestaurantIndexPage.css'
import * as restaurantActions from '../../store/restaurants'
import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RestaurantIndexItemButton from './RestoIndexItemButton';
import { BsStarFill } from 'react-icons/bs';
import { RestoHoursFullList, RestoHoursSingleLine } from './RestoHours';
import { BsClock } from 'react-icons/bs';
import RestaurantAmenitiesListings from './RestoAmenitiesListings';
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'


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
                    <ul 
                        id="restoListings" 
                        key={resto.id}>
                            <h2 className="restoName">
                                <Link to={`/restaurants/${resto.id}`} className="restoName">
                                    {i+1}. {resto.restaurantName}
                                </Link>
                            </h2>
                            <li> 
                                <BsStarFill className="starIcon"/>
                                <BsStarFill className="starIcon"/>
                                <BsStarFill className="starIcon"/>
                                <BsStarFill className="starIcon"/>
                                1139
                            </li>
                            <li>
                                <RestaurantIndexItemButton name={resto.cuisine}  id="cuisineFilterButton" /> • {resto.price} • {resto.neighborhood}
                            </li>
                            <li>
                                <BsClock className="clockIcon" /> <RestoHoursSingleLine times={resto.hours} />
                            </li>
                            <li>
                                <FaRegCommentAlt id="commentIcon" /> <p>My husband and I happened to stumble across this place Saturday night and it was AMAZING!!!</p>
                            </li>
                            <li>
                                <RestaurantAmenitiesListings name={resto.amenities}  />
                            </li>
                    </ul>
                </div>  
            )
        })
    );
}


export default RestaurantIndexItem;