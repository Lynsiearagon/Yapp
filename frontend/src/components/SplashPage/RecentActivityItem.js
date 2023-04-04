import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { VisualSingleReviewStarRating } from "../Stars/Index";


const RecentActivityItem = ({review, restaurants}) => {
    const history = useHistory();

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };

    if (!restaurants) {
        history.push('/')
    };

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