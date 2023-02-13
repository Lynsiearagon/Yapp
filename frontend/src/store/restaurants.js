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


export const FetchRestaurants = () => async (dispatch) => {
    const res = await csrfFetch('api/restaurants');
    
    if (res.ok) {
        const data = await res.json();
        dispatch(receiveRestaurants(data))
    };
};