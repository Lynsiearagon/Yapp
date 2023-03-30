import csrfFetch from "./csrf"; 

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

export const removeReview = (review) => ({
    type: REMOVE_REVIEW,
    review
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
        return Object.values(state.reviews);
    } else {
        return [];
    }
}

export const fetchAllReviews = () => async (dispatch) => {
    const res = await csrfFetch('/api/reviews'); 

    if (res.ok) {
        const reviews = await res.json();
        dispatch(receiveReviews(reviews)); 
    }
};

export const fetchAllRestaurantReviews = (restaurantId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/restaurants/${restaurantId}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveReviews(data))
        return res;
    }
}

export const createReview = (review) => async (dispatch) => {
    const res = await csrfFetch('/api/reviews/', {
        method: "POST",
        body: JSON.stringify(review)
    }); 

    if (res.ok) {
        const review = await res.json();
        dispatch(receiveReview(review));
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
        dispatch(removeReview(data)); 
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