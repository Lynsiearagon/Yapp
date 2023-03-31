import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TbRefresh } from "react-icons/tb";
import "./UpdateReview.css";


const UpdateReviewButton = ({review}) => {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    const redirectToUpdateReviewForm = () => {
        history.push(`/restaurants/${review.restaurantId}/edit/${review.id}/write-a-review`);
        window.scrollTo(0, 0);
    };

    if (sessionUser && sessionUser.id === review.reviewerId) {
        return (
            <div onClick={redirectToUpdateReviewForm} id="updateReviewIconDiv" title="Update review">
                <TbRefresh id="updateReviewIcon" />
            </div>
        )
    }
};

export default UpdateReviewButton; 