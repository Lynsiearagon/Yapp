import React from 'react';
import starIcon from '../../images/icons8-star-24.png';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';


const WriteAReviewButton = ({restaurantId}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const goToWriteAReviewPage = () => {
        history.push(`/restaurants/${restaurantId}/write-a-review`);
    };

    const mustBeLoggedInToWriteReview = (e) => {
        e.preventDefault();
        history.push("/login");
        dispatch(sessionActions.login(sessionUser));
        history.go(-1);
    };

    if (!sessionUser) {
        return (
            <div id="writeAReviewButtonLink" onClick={mustBeLoggedInToWriteReview}>
                <button id="writeAReviewButton"
                    onClick={() => {window.scrollTo({top:0, left: 0})}}> 
                        <img src={starIcon} alt="Star" id="reviewIcon" />
                        Write a Review
                </button>
            </div>
        )
    } else {
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
    
}

export default WriteAReviewButton; 