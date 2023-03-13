import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as restaurantActions from '../../store/restaurants';
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const RecentActivityItem = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(restaurantActions.getRestaurants)
    
    useEffect(() => {
        dispatch(restaurantActions.fetchRestaurants());
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    return (

        restaurants.map((resto) => {

            return (
                <ul className="RAIUserInfo">
                    <div id="iconUNWroteAReviewWrapper">
                        <li>
                            <FaUserCircle id="userPhotoIcon" />
                        </li>
                        <div id="userNameWroteAReviewWrapper">
                            <li>
                                <h1 id="userName">Lynsie A.</h1>
                            </li>
                            <li>
                                <p className="recentActivitySmallText">Wrote a Review</p>
                            </li>
                        </div>
                    </div>
                    <li>
                        <img src="https://lh3.googleusercontent.com/p/AF1QipNRQSMI33tURrINsgTZD-3_ijCeJK5pYf2arEr4=s680-w680-h510" alt="" id="recentActivityImg" />
                    </li>

                    <div id="restoNameAndReview">
                        <li >
                            <Link to={`/restaurants/${resto.id}`}  id="restoName" onClick={scrollToTop}> 
                                {resto.restaurantName} 
                            </Link>
                        </li>
                        <li >
                            <p className="recentActivitySmallText">Loved the food! Can't wait to go back. The cocktails were also amazing - I had 5!</p>
                        </li>
                    </div>
                </ul>
            );
        })
    );

};

export default RecentActivityItem;