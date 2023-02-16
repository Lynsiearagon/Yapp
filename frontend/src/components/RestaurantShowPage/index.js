import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getRestaurant } from "../../store/restaurants";
import './RestaurantShowPage.css'
import RestoHours from "../RestaurantIndexPage/RestoHours";
import MapWrapper from "../Map/Map";
import { BsStarFill } from 'react-icons/bs';
import RestaurantIndexItemButton from "../RestaurantIndexPage/RestoIndexItemButton";

const RestaurantShowPage = () => {
    const { restaurantId } = useParams();
    const restaurant = useSelector(getRestaurant(restaurantId))

    console.log(restaurant)

    return (
        
        <div id="restoShowPageWrapper">
            <header id="RestoHeaderDiv">
                <h1 id="restoNameHeader">{restaurant.restaurantName}</h1>
                <div>
                    <BsStarFill className="starIcon"/>
                    <BsStarFill className="starIcon"/>
                    <BsStarFill className="starIcon"/>
                    <BsStarFill className="starIcon"/>
                    756
                </div>
                <div>
                    {restaurant.price} 
                    <RestaurantIndexItemButton name={restaurant.cuisine} /> 
                </div>

            </header>
            <div id="imgBanner">
                <img src="https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1" alt="table of food" id="restoImgBanner"/>
            </div>
            
            <div id="locationAndHoursWrapper">
                <h2 id="hoursAndLocationHeader">Hours & Location</h2>
                <div id="mapAndAddressWrapper">
                    <div id="smallMapLocation">
                        <MapWrapper />
                    </div>
                    <div id="address">
                        {restaurant.streetAddress}
                        {restaurant.city}{restaurant.state}{restaurant.zipcode}
                        {restaurant.neighborhood}
                    </div>
                </div>
                <div id="hours">
                    <RestoHours times={restaurant.hours} />
                </div>
            </div>


        </div>
    )

}

export default RestaurantShowPage;