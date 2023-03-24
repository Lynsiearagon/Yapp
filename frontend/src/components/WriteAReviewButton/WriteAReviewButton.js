import React from 'react';
import starIcon from '../../images/icons8-star-24.png';
import { NavLink, useHistory } from 'react-router-dom';


const WriteAReviewButton = ({restaurantId}) => {
    const history = useHistory();

    const goToWriteAReviewPage = () => {
        history.push(`/restaurants/${restaurantId}/write-a-review`);
    }

    return (
        <div id="writeAReviewButtonLink" onClick={goToWriteAReviewPage}>
            <button id="writeAReviewButton"
                onClick={() => {window.scrollTo({top:0, left: 0})}}> 
                    <img src={starIcon} alt="Star" id="reviewIcon" />
                    Write a review
            </button>
        </div>
    )
}

export default WriteAReviewButton; 