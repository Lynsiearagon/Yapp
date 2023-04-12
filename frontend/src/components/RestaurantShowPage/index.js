import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRestaurant, getRestaurant } from "../../store/restaurants";
import { RestoHoursFullList, RestoHoursSingleLine } from "../RestaurantIndexPage/RestoHours";
import { VisualAverageStarRating } from "../Stars/Index";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import * as reviewActions from '../../store/reviews';
import MapWrapper from "../Map/Map";
import RestaurantIndexItemButton from "../RestaurantIndexPage/RestoIndexItemButton";
import Address from "./Address";
import RestaurantAmenitiesListings from "../RestaurantIndexPage/RestoAmenitiesListings";
import AboutTheRestaurant from "./AboutResto";
import StickyRestoContactInfo from "./StickyRestoContactInfo";
import Review from "./Reviews";
import MyStickyContactInfo from "./MyStickyContactInfo";
import WriteAReviewButton from "../WriteAReviewButton/WriteAReviewButton";
import './RestaurantShowPage.css';


const RestaurantShowPage = () => {
    const dispatch = useDispatch();
    const { restaurantId } = useParams();
    const restaurant = useSelector(getRestaurant(restaurantId));
    const reviews = useSelector(reviewActions.getReviews);

    useEffect(() => {
        dispatch(fetchRestaurant(restaurantId))
    }, [restaurantId, dispatch]);

    useEffect(() => {
        dispatch(reviewActions.fetchAllReviews())
    }, [reviews.length, restaurantId, dispatch]);


    if (!restaurant) {
        return (
            <div>loading..</div>
        )
    };


    return (
        
        <div id="restoShowPageWrapper">
            <header id="RestoHeaderDiv">
                <h1 id="restoNameHeader">{restaurant.restaurantName}</h1>
                <div id="starsOnRestoShowPageDiv">
                    <VisualAverageStarRating restaurant={restaurant} />
                </div>
                <div id="priceAndCuisineWrapper">
                    <div id="priceRange">
                        {restaurant.price}
                    </div>
                    <div id="divider">
                        •
                    </div>
                    <div id="showPageCuisineButtons">
                        <RestaurantIndexItemButton cuisine={restaurant.cuisine} id="showPageCuisineActualButton" />
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

                <div id="leftColOfRestoShowPage">

                    <WriteAReviewButton restaurantId={restaurant.id} />

                    <div id="locationAndHoursWrapper">
                        <div id="hoursAndLocationHeaderDiv">
                            <h2 id="hoursAndLocationHeader">Hours & Location</h2>
                        </div>

                        <div id="mapImageAndHoursWrapper">
                            <div id="mapAndAddressWrapper">
                                <div id="smallMapLocation">
                                    <MapWrapper zoom={15} />
                                </div>
                                <div id="underMapAddressWrapper">
                                    <Address 
                                        street={restaurant.streetAddress}
                                        city={restaurant.city}
                                        zipcode={restaurant.zipcode}
                                        state={restaurant.state}
                                        neighborhood={restaurant.neighborhood}
                                    />
                                <div id="getDirectionsDiv" title="Functionality coming soon">Get directions</div>
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


                    <div id="reviewsSectionWrapper">
                        <h2 id="reviewsHeader">Recommended Reviews</h2>

                        <div id="trustBanner">
                            <div id="emptyDivForAttention"></div>
                            <div id="exclamationIconDiv">
                                <AiOutlineExclamationCircle id="exclamationIcon" />
                            </div>
                            <div id="trustBannerMessage">
                                <span style={{fontWeight: "bold"}}>Your trust is our top concern</span><span>, so businesses can't pay to alter or remove their reviews.</span>
                            </div>
                        </div>

                        <div id="ReviewsSection">
                            {
                                Object.values(reviews).reverse().map((review) => 
                                <div key={review.id}><Review review={review} restaurantId={restaurant.id} /></div>)
                            }

                            { (!document.getElementById("reviewItemDivWrapper")) ?
                                <div id="noReviewsYetDiv">{`${restaurant.restaurantName} doesn't have reviews yet. Be the first to write a review!`}</div> 
                                : null
                            }
                        </div>
                    </div>


                </div>
                <div id="stickyRightColOfRestoShowPage">
                    <StickyRestoContactInfo 
                        website={restaurant.websiteLink} 
                        phone={restaurant.phoneNumber} />
                        
                    <MyStickyContactInfo />
                </div>
            </div>
        </div>
    ) 
    

}

export default RestaurantShowPage;