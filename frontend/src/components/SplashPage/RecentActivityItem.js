import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as restaurantActions from '../../store/restaurants';
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import * as reviewActions from '../../store/reviews';


const RecentActivityItem = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(restaurantActions.getRestaurants)
    const reviews = useSelector(reviewActions.getReviews)
    
    useEffect(() => {
        dispatch(restaurantActions.fetchRestaurants());
        dispatch(reviewActions.fetchAllReviews())
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    return (

        
        reviews.map((review) => {

            return (
                <ul className="RAIUserInfo" key={review.id}>
                    <div id="iconUNWroteAReviewWrapper">
                        <li>
                            <FaUserCircle id="userPhotoIcon" />
                        </li>
                        <div id="userNameWroteAReviewWrapper">
                            <li>
                                <h1 id="userName">{review.reviewerFirstName} {review.reviewerLastName[0]}.</h1>
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
                            <Link to={`/restaurants/${review.restaurantId}`}  
                                id="restoName" 
                                key={review.id} 
                                onClick={scrollToTop}> {review.restaurant} 
                            </Link>
                        </li>
                        <li >
                            <p id="recentActivitySmallText">{review.body}</p>
                        </li>
                    </div>
                </ul>
            );
        })
    );

};

export default RecentActivityItem;