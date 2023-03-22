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
    const [body, setBody] = useState('');
    const [starRating, setStarRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(fetchRestaurant(restaurantId))
    }, [restaurantId, dispatch])


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(reviewActions.createReview({
            body, 
            starRating, 
            restaurantId: restaurant.id, 
            reviewerId: sessionUser.id,
            reviewFirstName: sessionUser.firstName, 
            reviewerLastName: sessionUser.lastName
        }))
            .catch(async (res) => {
                let data; 
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors); 
                else if (data) setErrors([data]); 
                else setErrors([res.statusText])
            });
    }


    return (
        <>
        <div id="writeAReviewPageWrapper">

            <div id="restoNameHeaderWAR">
                {restaurant.restaurantName}
            </div>

            <form onSubmit={handleSubmit} id="starRatingAndReviewDiv">

                <div id="starRatingDiv">
                    {
                        [...Array(5)].map((star, index) => {
                            index += 1; 
                            return (
                                <button
                                    type="button"
                                    key={index}
                                    className={index <= (hover || starRating) ? "on" : "off"}
                                    onClick={() => setStarRating(index)}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(starRating)}
                                    >
                                    <span className="star">&#9733;</span>
                                </button>
                            )
                        })
                    }
                </div>

                <div>
                    <input 
                        type="text" 
                        id="reviewBodyInputField"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                        placeholder="placeholder text"
                        />
                </div>
                <button
                    type="submit"
                    id="submitAReviewButton">
                        Post Review
                </button>
            </form>
            <ul>
                {errors.map(error => <li id="errorsLi" key={error}>{error}</li>)}
            </ul>
        </div>
        </>
    )
        
}

export default WriteAReview;