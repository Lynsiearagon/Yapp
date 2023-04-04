import './RestaurantIndexPage.css'
import * as restaurantActions from '../../store/restaurants'
import { useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RestaurantIndexItemButton from './RestoIndexItemButton';
import { RestoHoursSingleLine } from './RestoHours';
import { BsClock } from 'react-icons/bs';
import RestaurantAmenitiesListings from './RestoAmenitiesListings';
import { Link } from 'react-router-dom';
import RestoIndexReview from './IndexReview';
import { VisualAverageStarRating } from '../Stars/Index'


const RestaurantIndexItem = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(restaurantActions.getRestaurants);
    
    useEffect(() => {
        dispatch(restaurantActions.fetchRestaurants())
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    return (   

        restaurants.map((resto, i) => {

            return (
                
            <Link to={`/restaurants/${resto.id}`} 
                id="RestoItemDivLink" 
                onClick={scrollToTop} 
                key={resto.id}
                target="_blank"
                rel="noreferrer"
                >
                <div id='imageAndRestoInfo'>   
                    <img src="https://b.zmtcdn.com/data/pictures/1/19820841/6e14f718013d279f0f4525d4731cd985.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" id="restoImage"/>                      
                    <ul 
                        id="restoListings" 
                        key={resto.id}>
                            <h2 className="restoName">
                                {i+1}. {resto.restaurantName}
                            </h2>
                            <li id="starRatingOnRestoIndexPage">
                                <VisualAverageStarRating restaurant={resto} />
                            </li>
                            <li>
                                <RestaurantIndexItemButton name={resto.cuisine} id="cuisineFilterButton" /> • {resto.price} • {resto.neighborhood}
                            </li>
                            <li>
                                <BsClock className="clockIcon" /> <RestoHoursSingleLine times={resto.hours} />
                            </li>
                            <li id="indexPageRestoReview">
                                <RestoIndexReview restaurantId={resto.id} />
                            </li>
                            <li>
                                <RestaurantAmenitiesListings name={resto.amenities}  />
                            </li>
                    </ul>
                </div>  
            </Link>
            )
        })
    );
}


export default RestaurantIndexItem;