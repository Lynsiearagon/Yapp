import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { VisualSingleReviewStarRating } from "../Stars/Index";
import { useSelector } from "react-redux";
import { getRestaurants } from "../../store/restaurants"

const RecentActivityItem = ({review}) => {
    const restaurants = useSelector(getRestaurants);
    
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    if (!restaurants) {
        return <div>Loading</div>
    };

    return (
            <ul className="RAIUserInfo" key={review.id}>
                <div id="iconUNWroteAReviewWrapper">
                    <li>
                        <FaUserCircle id="userPhotoIcon" />
                    </li>
                    <div id="userNameWroteAReviewWrapper">
                        <li>
                            <h1 id="userName">{review?.reviewerFirstName} {review?.reviewerLastName[0]}.</h1>
                        </li>
                        <li>
                            <p className="recentActivitySmallText">Wrote a Review</p>
                        </li>
                    </div>
                </div>
                <li>
                    <img src="https://storage.googleapis.com/cafebabareeba_bucket/wp-content/uploads/Cafe-Ba-Ba-Reeba_Social-Events_Private-Parties_Catering_40-scaled.jpg" alt="Restaurant interior" id="recentActivityImg" />
                </li>

                <div id="restoNameAndReview">
                    <li>
                        <Link to={`/restaurants/${review.restaurantId}`}  
                            id="restoName" 
                            key={review.id} 
                            onClick={scrollToTop}> {restaurants[review.restaurantId - 1]?.restaurantName} 
                        </Link>
                    </li>
                    <li id="starsOnSplashPage">
                        <VisualSingleReviewStarRating review={review} />
                    </li>
                    <li >
                        <div id="recentActivityReviewPreview">{review.body}</div>
                    </li>
                </div>
            </ul>
    );

};

export default RecentActivityItem;