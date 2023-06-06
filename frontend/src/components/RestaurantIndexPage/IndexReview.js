import React, { useEffect } from 'react';
import { fetchAllReviews } from '../../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';
import { FaRegCommentAlt } from "react-icons/fa";
import "./RestaurantIndexPage.css";

const RestoIndexReview = ({restaurantId}) => {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews);

    useEffect(() => {
        dispatch(fetchAllReviews());
    }, [reviews, dispatch])

    let newerReviews = Object.values(reviews).reverse();

    for (let i=0; i < newerReviews.length; i++) {
        if (!document.getElementById(restaurantId) &&
            newerReviews[i].restaurantId === restaurantId && 
            newerReviews[i].starRating > 3) {
            return (
                <> 
                    <FaRegCommentAlt className="commentIcon" /> 
                    <p id="onIndexReviewBody">{newerReviews[i].body}</p>
                </>
            )
        } else {
            if (i === newerReviews.length - 1 && !document.getElementById(restaurantId)) {
                return <p id="onIndexReviewBody">No reviews yet. Be the first to review!</p>
            }
        }
        
    };

};

export default RestoIndexReview; 