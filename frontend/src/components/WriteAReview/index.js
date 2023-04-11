import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurant } from '../../store/restaurants';
import { useParams, useHistory } from 'react-router-dom';
import * as reviewActions from '../../store/reviews';
import { BsFillStarFill } from 'react-icons/bs';
import './WriteAReview.css';



const WriteAReview = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { restaurantId } = useParams();
    const { reviewId } = useParams();
    let review = useSelector(reviewActions.getReview(reviewId));

    const restaurant = useSelector(getRestaurant(restaurantId));
    const [body, setBody] = useState(reviewId ? review.body : "");
    const [starRating, setStarRating] = useState(reviewId ? review.starRating : "");
    const [hover, setHover] = useState(0);
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        
        let formData = {
            body, 
            star_rating: starRating,
            restaurant_id: restaurantId
        };

        if (reviewId) {
            dispatch(reviewActions.updateReview(formData, reviewId));
            history.push(`/restaurants/${restaurantId}`);
        } else if (!reviewId) {
            dispatch(reviewActions.createReview(formData, restaurantId, history))
            .catch(async (res) => {
                let data; 
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            }); 
        };

        return errors;
    }

    const buttonText = reviewId ? 'Update Review' : 'Post Review';

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
                        {[...Array(5)].map((star, index) => {
                            index += 1; 
                            
                            return (
                                <button
                                    type="button"
                                    key={index}
                                    className={index <= (hover || star) ? "on" : "off"}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(starRating)}
                                    onClick={(e) => setStarRating(index)}
                                    value={starRating}
                                    required
                                    >
                                    <span id="starImageSpanDiv"> <BsFillStarFill className="starImage"/> </span>
                                </button>
                            )
                        })}
                    </div>

                    <textarea
                        type="text" 
                        id="reviewBodyInputField"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Doesn't look like much when you walk past, but I was practially dying of hunger so I popped in. The definition of hole-in-the-wall. I got the regular hamburger and wow... there are no words. A classic burger done right. Crisp bun, juicy patty, stuffed with essentials (ketchup, shredded lettuce, tomato, and pickles). There's about a million options available between the menu board and wall full of specials, so it can get a little overwhelming, but you really can't go wrong. Not much else to say besides go see for yourself! You won't be disappointed."
                        required
                        >
                    </textarea>
                    <ul>
                        {errors ? errors.map(error => <li id="createReviewErrors" key={error}>{error}</li>) : <div></div>}
                    </ul>
                </div>

                <button
                    type="submit"
                    id="submitAReviewButton"
                    onClick={(e) => setStarRating(starRating)}
                    onChange={(e) => setBody(body)}
                    >
                        {buttonText}
                </button>
            </form>

        </div>
        </div>
        
        </>
    )
        
}

export default WriteAReview;