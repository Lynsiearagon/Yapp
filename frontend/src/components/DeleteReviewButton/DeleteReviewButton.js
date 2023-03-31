import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiTrash } from "react-icons/bi";
import * as reviewActions from '../../store/reviews';
import "./DeleteReviewButton.css"


const DeleteReviewButton = ({review}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const deleteThisReview = () => {
        dispatch(reviewActions.deleteReview(review.id));
    };

    if ( sessionUser && sessionUser.id === review.reviewerId) {
        return (
            <div onClick={deleteThisReview} id="deleteReviewIcon" title="Delete review">
                <BiTrash />
            </div>
        )
    };
};

export default DeleteReviewButton; 