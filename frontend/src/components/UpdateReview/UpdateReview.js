import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TbRefresh } from "react-icons/tb";
import * as reviewActions from '../../store/reviews';
import "./UpdateReview.css";


const UpdateReviewButton = ({review}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    const redirectToUpdateReviewForm = () => {
        history.push(`/restaurants/${review.restaurantId}/write-a-review`);
        window.scrollTo(0, 0);
    };

    if (sessionUser.id === review.reviewerId) {
        return (
            <div onClick={redirectToUpdateReviewForm} id="updateReviewIconDiv" title="Update review">
                <TbRefresh id="updateReviewIcon" />
            </div>
        )
    } else {
        return null;
    };
};

export default UpdateReviewButton; 