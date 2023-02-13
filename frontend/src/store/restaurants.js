import csrfFetch from "./csrf";

const RECEIVE_RESTAURANT = 'restaurants/RECEIVE_RESTAURANT'
const RECEIVE_RESTAURANTS = 'restaurants/RECEIVE_RESTAURANTS'
const REMOVE_RESTAURANTS = 'restaurants/REMOVE_RESTAURANTS'

export const receiveRestaurant = (restaurant) => ({
    type: RECEIVE_RESTAURANT, 
    restaurant
}); 

export const receiveRestaurants = () => ({
    type: RECEIVE_RESTAURANTS, 
    restaurants 
});

export const removeRestaurants = (restaurantId) => ({
    type: REMOVE_RESTAURANTS,
    restaurantId
});


export const fetchRestaurants = () => async (dispatch) => {
    const res = await csrfFetch('api/restaurants');
    
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveRestaurants(data));
    };
};

export const fetchRestaurant = (restaurant) => async (dispatch) => {
    const res = await csrfFetch(`api/restaurants/${restaurant.id}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveRestaurant(data));
    };
};

export const removeRestaurant = (restaurantId) => async (dispatch) => {
    const res = await csrfFetch(`api/restaurants/${restaurantId}`, {
        method: 'DELETE'
    });
    
    if (res.ok) {
        dispatch(removeRestaurant(restaurantId));
    }
};


const restaurantReducer = (state = {}, action) => {
    const newState = { ...state};

    switch(action.type) {
        case RECEIVE_RESTAURANT:
            newState[action.restaurant.id] = action.restaurant;
            return newState;
        case RECEIVE_RESTAURANTS:
            return {...state, ...action.restaurants};
        case REMOVE_RESTAURANTS:
            delete newState[action.restaurantId];
            return newState;
        default:
            return newState;
    };
};


export default restaurantReducer

