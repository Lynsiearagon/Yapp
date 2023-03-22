import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurant } from '../../store/restaurants';
import { getRestaurant } from '../../store/restaurants';
import { useParams, Redirect } from 'react-router-dom';
import * as reviewActions from '../../store/reviews';
import './WriteAReview.css'



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

            <Redirect to={`/restaurants/${restaurantId}`} />
    }


    return (
        <>
        <div id="writeAReviewPageWrapper">

        <div>
            <div id="restoNameHeaderWAR">
                {restaurant.restaurantName}
            </div>

            <form onSubmit={handleSubmit} id="starRatingAndReviewDiv">
                <div id="ratingAndReviewBorder">

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

                    {/* <div id="reviewDiv"> */}
                        <textarea
                            type="text" 
                            id="reviewBodyInputField"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                            placeholder="Doesn't look like much when you walk past, but I was practially dying of hunger so I popped in. The definition of hole-in-the-wall. I got the regular hamburger and wow... there are no words. A classic burger done right. Crisp bun, juicy patty, stuffed with essentials (ketchup, shredded lettuce, tomato, and pickles). There's about a million options available between the menu board and wall full of specials, so it can get a little overwhelming, but you really can't go wrong. Not much else to say besides go see for yourself! You won't be disappointed."
                            >
                            </textarea>
                    {/* </div> */}

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
        </div>
        
        </>
    )
        
}

export default WriteAReview;