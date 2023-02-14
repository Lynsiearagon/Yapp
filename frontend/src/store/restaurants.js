import csrfFetch from "./csrf";

const RECEIVE_RESTAURANT = 'restaurants/receiveRestaurant';
const RECEIVE_RESTAURANTS = 'restaurants/receiveRestaurants';
const REMOVE_RESTAURANTS = 'restaurants/removeRestaurants';

export const receiveRestaurants = (restaurants) => ({
    type: RECEIVE_RESTAURANTS, 
    restaurants
});


export const receiveRestaurant = (restaurant) => ({
    type: RECEIVE_RESTAURANT, 
    restaurant
}); 


export const removeRestaurants = (restaurantId) => ({
    type: REMOVE_RESTAURANTS,
    restaurantId
});


export const fetchRestaurants = () => async (dispatch) => {
    const res = await csrfFetch('/api/restaurants');
    
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveRestaurants(data));
        return res; 
    };
};

export const fetchRestaurant = (restaurantId) => async (dispatch) => {
    const res = await csrfFetch(`/api/restaurants/${restaurantId}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveRestaurant(data));
        return res;
    };
};

export const removeRestaurant = (restaurantId) => async (dispatch) => {
    const res = await csrfFetch(`/api/restaurants/${restaurantId}`, {
        method: 'DELETE'
    });
    
    if (res.ok) {
        dispatch(removeRestaurant(restaurantId));
    };
};


const restaurantReducer = (state = {}, action) => {
    const newState = { ...state};

    switch(action.type) {
        case RECEIVE_RESTAURANT:
            newState[action.restaurant.id] = action.restaurant;
            return newState;
        case RECEIVE_RESTAURANTS:
            return { ...state, ...action.restaurants };
        case REMOVE_RESTAURANTS:
            delete newState[action.restaurantId];
            return newState;
        default:
            return newState;
    };
};


export default restaurantReducer;

