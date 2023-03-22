import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant } from '../../store/restaurants';
import { getRestaurant } from '../../store/restaurants';
import { useParams } from 'react-router-dom';
import * as reviewActions from '../../store/reviews';



const WriteAReview = () => {

    const dispatch = useDispatch();
    const { restaurantId } = useParams();
    const restaurant = useSelector(getRestaurant(restaurantId));
    const [reviews, setReviews] = useState('')

    useEffect(() => {
        dispatch(fetchRestaurant(restaurantId))
    }, [restaurantId, dispatch])



    return (
        <>
        <div id="writeAReviewPageWrapper">
            <div id="restoNameHeaderWAR">
                {restaurant.restaurantName}
            </div>

            <div>
                <input type="text" />
            </div>
        </div>
        </>
    )
        
}

export default WriteAReview;