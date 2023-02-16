import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchRestaurant, getRestaurant } from "../../store/restaurants";
import './RestaurantShowPage.css'
import { RestoHoursFullList, RestoHoursSingleLine } from "../RestaurantIndexPage/RestoHours";
import MapWrapper from "../Map/Map";
import { BsStarFill } from 'react-icons/bs';
import RestaurantIndexItemButton from "../RestaurantIndexPage/RestoIndexItemButton";
import Address from "./address";



const RestaurantShowPage = () => {
    const dispatch = useDispatch();
    const { restaurantId } = useParams();
    const restaurant = useSelector(getRestaurant(restaurantId));

    console.log(restaurant)

    useEffect(() => {
        dispatch(fetchRestaurant(restaurantId))
    }, [restaurantId, dispatch]);

    if (!restaurant) {
        return (
            <div>loading..</div>
        )
    }

    return (
        
        <div id="restoShowPageWrapper">
            <header id="RestoHeaderDiv">
                <h1 id="restoNameHeader">{restaurant.restaurantName}</h1>
                <div id="starsOnRestoShowPageDiv">
                    <BsStarFill className="starsOnRestoShowPage"/>
                    <BsStarFill className="starsOnRestoShowPage"/>
                    <BsStarFill className="starsOnRestoShowPage"/>
                    <BsStarFill className="starsOnRestoShowPage"/>
                </div>
                <div id="priceAndCuisineWrapper">
                    <div id="priceRange">
                        {restaurant.price}
                    </div>
                    <div id="divider">
                        •
                    </div>
                    <div id="showPageCuisineButtons">
                        <RestaurantIndexItemButton name={restaurant.cuisine} id="showPageCuisineActualButton" /> 
                    </div>
                </div>
                <div id="todaysHours">
                    <RestoHoursSingleLine times={restaurant.hours} />
                </div>

            </header>

            <div id="imgBanner">
                <img src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1" alt="table of food" id="restoImgBanner"/>
            </div>
            
                <div id="locationAndHoursWrapper">
                    <div id="hoursAndLocationHeaderDiv">
                        <h2 id="hoursAndLocationHeader">Hours & Location</h2>
                    </div>

                    <div id="mapImageAndHoursWrapper">
                        <div id="mapAndAddressWrapper">
                            <div id="smallMapLocation">
                                <MapWrapper />
                            </div>
                            <div>
                                <Address 
                                    street={restaurant.streetAddress}
                                    city={restaurant.city}
                                    zipcode={restaurant.zipcode}
                                    state={restaurant.state}
                                    neighborhood={restaurant.neighborhood}
                                />
                            </div>
                        </div>
                        <div id="hours">
                            <RestoHoursFullList times={restaurant.hours} />
                        </div>
                    </div>
                </div>

            </div>
    )

}

export default RestaurantShowPage;