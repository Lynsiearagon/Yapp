import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BsStarFill } from 'react-icons/bs'; 
import * as reviewActions from '../../store/reviews';
import './Stars.css';


export const VisualAverageStarRating = ({restaurant}) => {

    const reviews = useSelector(reviewActions.getReviews); 
    let totalStarCount = 0;
    let totalRestoReviews = 0;
     
    reviews.map((review) => {
        if (review.restaurantId === restaurant.id) {
            totalStarCount += review.starRating; 
            totalRestoReviews += 1;
        }
    });

    let average = Math.floor(totalStarCount / totalRestoReviews);
    
    switch(average) {
        case 1: 
            return <div id="greyStarsDiv">
                        <BsStarFill className="yellowStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                    </div>
        case 2:
            return <div id="greyStarsDiv">
                        <BsStarFill className="orangeStars"/>
                        <BsStarFill className="orangeStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                    </div>
        case 3:
            return <div id="greyStarsDiv">
                        <BsStarFill className="darkOrangeStars"/>
                        <BsStarFill className="darkOrangeStars"/>
                        <BsStarFill className="darkOrangeStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                    </div>
        case 4:
            return <div id="greyStarsDiv">
                        <BsStarFill className="orangeRedStars"/>
                        <BsStarFill className="orangeRedStars"/>
                        <BsStarFill className="orangeRedStars"/>
                        <BsStarFill className="orangeRedStars"/>
                        <BsStarFill className="greyStars"/>
                    </div>
        case 5: 
            return <div id="greyStarsDiv">
                        <BsStarFill className="redStars"/>
                        <BsStarFill className="redStars"/>
                        <BsStarFill className="redStars"/>
                        <BsStarFill className="redStars"/>
                        <BsStarFill className="redStars"/>
                    </div>
        default:
            return  <div id="greyStarsDiv">
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                    </div>
    };
};



export const VisualSingleReviewStarRating = ({review}) => {
    const rating = review.starRating; 

    switch(rating) {
        case 1:
            return <div id="greyStarsDiv">
                        <BsStarFill className="yellowStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                    </div>
        case 2:
            return <div id="greyStarsDiv">
                        <BsStarFill className="orangeStars"/>
                        <BsStarFill className="orangeStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                    </div>
        case 3:
            return <div id="greyStarsDiv">
                        <BsStarFill className="darkOrangeStars"/>
                        <BsStarFill className="darkOrangeStars"/>
                        <BsStarFill className="darkOrangeStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                    </div>
        case 4:
            return <div id="greyStarsDiv">
                        <BsStarFill className="orangeRedStars"/>
                        <BsStarFill className="orangeRedStars"/>
                        <BsStarFill className="orangeRedStars"/>
                        <BsStarFill className="orangeRedStars"/>
                        <BsStarFill className="greyStars"/>
                    </div>
        case 5:
            return  <div id="greyStarsDiv">
                        <BsStarFill className="redStars"/>
                        <BsStarFill className="redStars"/>
                        <BsStarFill className="redStars"/>
                        <BsStarFill className="redStars"/>
                        <BsStarFill className="redStars"/>
                    </div>
        default:
            return <div id="greyStarsDiv">
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                        <BsStarFill className="greyStars"/>
                    </div>
    };
};
