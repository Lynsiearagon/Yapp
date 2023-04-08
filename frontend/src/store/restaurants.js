import csrfFetch from "./csrf";

const RECEIVE_RESTAURANT = 'restaurants/receiveRestaurant';
const RECEIVE_RESTAURANTS = 'restaurants/receiveRestaurants';
const REMOVE_RESTAURANT = 'restaurants/removeRestaurant';

export const receiveRestaurants = (restaurants) => ({
    type: RECEIVE_RESTAURANTS, 
    restaurants
});


export const receiveRestaurant = (restaurant) => ({
    type: RECEIVE_RESTAURANT, 
    restaurant
}); 


export const removeRestaurant = (restaurantId) => ({
    type: REMOVE_RESTAURANT,
    restaurantId
});

export const getRestaurants = (state) => {
    if (state.restaurants) {
        return Object.values(state.restaurants)
    } else {
        return []
    }
}

export const getRestaurant = (restaurantId) => state => {
    if (state.restaurants) {
        return state.restaurants[restaurantId]
    } else {
        return null
    }
}


export const fetchRestaurants = (queryString) => async (dispatch) => {
    if (!queryString) {
        queryString = null;
    }

    const res = await csrfFetch(`/api/restaurants/${queryString}`);
    
    if (res.ok) {
        const restaurants = await res.json();
        dispatch(receiveRestaurants(restaurants));
    };
};

export const fetchRestaurant = (restaurantId) => async (dispatch) => {
    const res = await csrfFetch(`/api/restaurants/${restaurantId}`);

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveRestaurant(data.restaurant));
        return res;
    };
};

export const deleteRestaurant = (restaurantId) => async (dispatch) => {
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
        case REMOVE_RESTAURANT:
            delete newState[action.restaurantId];
            return newState;
        default:
            return newState;
    };
};


export default restaurantReducer;

