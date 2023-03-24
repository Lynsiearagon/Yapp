import csrfFetch from "./csrf"; 
import { receiveRestaurant } from "./restaurants";
import { receiveUser } from "./user";

const RECEIVE_REVIEW = 'reviews/receiveReview';
const RECEIVE_REVIEWS = 'reviews/receiveReviews'; 
const REMOVE_REVIEW = 'reviews/removeReview';


export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
}); 

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});



export const getReview = (reviewId) => (state) => {
    if (state.reviews) {
        return state.reviews[reviewId]
    } else {
        return null
    }
};

export const getReviews = (state) => {
    if (state.reviews) {
        return Object.values(state.reviews)
    } else {
        return []
    }
};

export const getRestaurantReviews = (restaurantId) => (state) => {
    Object.values(state.reviews)
        .filter(review => review.restaurantId === restaurantId)
        .map(review => ({
            ...review,
            reviewer: state.users[review.reviewerId]?.firstName
        }))
};



export const fetchAllReviews = () => async (dispatch) => {
    const res = await csrfFetch('/api/reviews'); 

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveReviews(data)); 
        return res;
    }
};

export const createReview = (review) => async (dispatch) => {
    const { body, starRating, restaurantId, reviewerId, reviewerFirstName, reviewerLastName } = review;
    const res = await csrfFetch('/api/reviews/', {
        method: "POST",
        body: JSON.stringify({
            body, 
            starRating, 
            restaurantId, 
            reviewerId, 
            reviewerFirstName, 
            reviewerLastName
        })
    }); 

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveReview(data.review));
        return res; 
    }
};

export const updateReview = (review) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: "PATCH",
        body: JSON.stringify(review)
    });

    if (res.ok) {
        const review = await res.json();
        dispatch(receiveReview(review)); 
        return res;
    }
};

export const deleteReview = (reviewId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    }); 

    if (res.ok) {
        const data = await res.json();
        dispatch(removeReview(data.review)); 
        return res; 
    }
};



const reviewsReducer = (state = {}, action) => {
    const newState = {...state};

    switch(action.type) {
        case RECEIVE_REVIEW: 
            newState[action.review.id] = action.review; 
            return newState;
        case RECEIVE_REVIEWS: 
            return { ...state, ...action.reviews };
        case REMOVE_REVIEW:
            delete newState[action.reviewId];
            return newState; 
        default: 
            return newState; 
    };
};


export default reviewsReducer; 