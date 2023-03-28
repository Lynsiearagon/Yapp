import React, { useEffect } from 'react';
import { fetchAllReviews } from '../../store/reviews';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/reviews';
import { FaRegCommentAlt } from "react-icons/fa";

const RestoIndexReview = ({restaurantId}) => {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews);

    useEffect(() => {
        dispatch(fetchAllReviews());
    }, [])

    let newerReviews = Object.values(reviews).reverse();

    for (let i=0; i < newerReviews.length; i++) {
        if (!document.getElementById(restaurantId) &&
            newerReviews[i].restaurantId === restaurantId && 
            newerReviews[i].starRating > 3) {
            return (
                <> <FaRegCommentAlt id="commentIcon" /> <p>{newerReviews[i].body}</p> </>
            )
        } else {
            continue;
        }
    };

};

export default RestoIndexReview; 