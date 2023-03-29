import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import * as restaurantActions from '../../store/restaurants';
import * as reviewActions from '../../store/reviews';


const RecentActivityItem = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(restaurantActions.getRestaurants)
    const reviews = useSelector(reviewActions.getReviews)
    
    useEffect(() => {
        dispatch(restaurantActions.fetchRestaurants());
    }, []);

    useEffect(() => {
        dispatch(reviewActions.fetchAllReviews())
    },[])

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    return (
    
        Object.values(reviews).reverse().map((review) => {

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
                                onClick={scrollToTop}> {restaurants[review.restaurantId - 1].restaurantName} 
                            </Link>
                        </li>
                        <li >
                            <div id="recentActivityReviewPreview">{review.body}</div>
                        </li>
                    </div>
                </ul>
            );
        })
    );

};

export default RecentActivityItem;