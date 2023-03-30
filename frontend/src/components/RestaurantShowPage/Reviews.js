import React from 'react';
import { VisualSingleReviewStarRating } from '../Stars/Index';


const Reviews = ({review, restaurantId}) => {

    if (review.restaurantId === restaurantId) {
        return (
        
            <div id="reviewDiv">
                <div>
                    Photo placeholder
                </div>
                <div id="starRating">
                    <VisualSingleReviewStarRating review={review} />
                </div>
                
                <div id="review">
                    <ol>
                        <li>{review.reviewerFirstName}</li>
                        <li>{review.body}</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Reviews;