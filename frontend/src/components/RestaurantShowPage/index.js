import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { fetchRestaurant, getRestaurant } from "../../store/restaurants";
import './RestaurantShowPage.css'
import { RestoHoursFullList, RestoHoursSingleLine } from "../RestaurantIndexPage/RestoHours";
import MapWrapper from "../Map/Map";
import { BsStarFill } from 'react-icons/bs';
import RestaurantIndexItemButton from "../RestaurantIndexPage/RestoIndexItemButton";
import Address from "./address";
import RestaurantAmenitiesListings from "../RestaurantIndexPage/RestoAmenitiesListings";
import AboutTheRestaurant from "./AboutResto";
import Review from "./Reviews";
import Resume from "../../images/LynsieAragonResume.pdf";
import starIcon from "../../images/icons8-star-24.png"


const RestaurantShowPage = () => {
    const dispatch = useDispatch();
    const { restaurantId } = useParams();
    const restaurant = useSelector(getRestaurant(restaurantId));

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
                <img src="https://cdn.vox-cdn.com/thumbor/jzvbDm1UGW3rRA6S4me3uN4u9cM=/0x304:5758x3543/1200x675/cdn.vox-cdn.com/uploads/chorus_image/image/66216284/Quality_Bistro_1.0.jpg" alt="table of food" id="restoImgBanner"/>
            </div>

            <div id="columnsWrapper">

            <div id="leftCalOfRestoShowPage">

                <div id="quickAccessButtons">
                    <NavLink to="/write-a-review" id="writeAReviewButtonLink" >
                        <div id="writeAReviewButton"> 
                            <img src={starIcon} alt="Star" id="reviewIcon" />
                            Write a review
                        </div>
                    </NavLink>
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

                <div id="amenitiesAndMoreWrapper">
                    <h2 id="amenitiesAndMoreHeader">Amenities and More</h2>
                    <div id="amenitiesDiv">
                        <RestaurantAmenitiesListings name={restaurant.amenities} />
                    </div>
                </div>

                <div id="aboutTheRestoDiv">
                    <h2 id="aboutTheRestoHeader">About The Restaurant</h2>
                    <div id="aboutTheRestoBlurb">
                        <AboutTheRestaurant 
                            about={restaurant.aboutRestaurant} />
                    </div>
                </div>
                <div>
                    <h2 id="reviewsHeader">Recommended Reviews</h2>
                    <div id="ReviewsSection">
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                    </div>
                </div>
            </div>
            <div id="stickyRigthColOfRestoShowPage">
                <div id="restoContactInfo">
                    <div id="restoWebsiteLink">
                        <a href={restaurant.websiteLink} 
                            target="_blank" rel="noreferrer">
                            {restaurant.websiteLink}
                        </a>
                    </div>
                    <div id="restoPhoneNumber">
                        {restaurant.phoneNumber}
                    </div>
                </div>

                <div id="myContactInfoAndResume">
                    <h2 id="stickyContactMeHeaderDiv">Contact Me</h2>
                    <div id="restoShowPersonalLinks">
                        <a href="https://lynsiearagon.github.io/Lynsie-portfolio/"
                            target="_blank" rel="noreferrer">Portfolio
                        </a>
                        <a href="https://www.linkedin.com/in/lynsie-aragon-87156a157/"
                            target="_blank" rel="noreferrer">LinkedIn
                        </a>
                    </div>
                    <span>
                        <p>Availible</p><p>Mon - Fri</p><p>9 am - 7 pm</p>
                    </span>
                    <div>
                        <a href={Resume} download>Download Resume</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )

}

export default RestaurantShowPage;