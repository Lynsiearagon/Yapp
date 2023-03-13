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
                <ul className="RAIUserInfo" key={resto.id}>
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
                        <img src="#" alt="" id="recentActivityImg" />
                    </li>

                    <div id="restoNameAndReview">
                        <li>
                            <Link to={`/restaurants/${resto.id}`}  
                                id="restoName" 
                                key={resto.id} 
                                onClick={scrollToTop}> {resto.restaurantName} 
                            </Link>
                        </li>
                        <li >
                            <p className="recentActivitySmallText">This is a placeholder for the most recent review of the resto</p>
                        </li>
                    </div>
                </ul>
            );
        })
    );

};

export default RecentActivityItem;