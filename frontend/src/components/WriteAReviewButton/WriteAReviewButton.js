import React from 'react';
import starIcon from '../../images/icons8-star-24.png';
import { NavLink } from 'react-router-dom';


const WriteAReviewButton = ({restaurantId}) => {

    return (
        <div id="writeAReviewButtonLink">
            <NavLink to={`/restaurants/${restaurantId}/write-a-review`} >
                <button id="writeAReviewButton"
                    onClick={() => {window.scrollTo({top:0, left: 0})}}> 
                        <img src={starIcon} alt="Star" id="reviewIcon" />
                        Write a review
                </button>
            </NavLink>
        </div>
    )
}

export default WriteAReviewButton; 