import React from 'react';
import starIcon from '../../images/icons8-star-24.png';
import { NavLink } from 'react-router-dom';


const WriteAReviewButton = ({restaurantId}) => {


    return (
        <div id="writeAReviewButtonLink">
            <NavLink to={`/restaurants/${restaurantId}/write-a-review`} >
                <div id="writeAReviewButton"> 
                    <img src={starIcon} alt="Star" id="reviewIcon" />
                    Write a review
                </div>
            </NavLink>
        </div>
    )
}

export default WriteAReviewButton; 