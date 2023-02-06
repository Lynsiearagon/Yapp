import { csrfFetch } from './csrf.js'

const RECEIVE_USER = `users/RECEIVE_USER`; 
const REMOVE_USER = `users/REMOVE_USER`

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
}); 

export const removeUser = (userId) => ({
    type: REMOVE_USER,
    userId
});

export const getUser = (userId) => (state) => {
    if (state.users) {
        return state.users[userId]
    } else {
        return null
    };
};

export const signUpUser = (user) => async (dispatch) => {
    const { email, first_name, last_name, password, zipcode, birthday} = user;
    const res = await csrfFetch("/api/users/", {
        method: "POST", 
        body: JSON.stringify({
            email,
            first_name, 
            last_name,
            password,
            zipcode,
            birthday
        })
    });
    const data = await res.json();
    sessionStorage.setItem("currentUser", JSON.stringify(user.data))
    dispatch(receiveUser(user));
}  

export const loginUser = (user) => async (dispatch) => {
    const { email, password } = user; 
    const res = await csrfFetch(`/api/session`, {
        method: "POST", 
        body: JSON.stringify({
            email, password
        })
    });
    const data = await res.json(); 
    dispatch(getUser(data.user)); 
    return res 
};

export const updateUser = (user) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${user.id}`, {
        method: "PATCH",
        body: JSON.stringify(user)
    })
    if (res.ok) {
        const data = await res.json(); 
        sessionStorage.setItem("currentUser", JSON.stringify(data.user))
        dispatch(receiveUser(data.user))
    }
};

export const logoutUser = (userId) => async (dispatch) => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    });
    sessionStorage.setItem('currentUser', null)
    dispatch(removeUser(userId));
};

export const deleteUser = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}`, {
        method: "DELETE"
    })
    if (res.ok) {
        dispatch(removeUser(userId))
    };
};

const userReducer = (state = {}, action) => {
    const newState = { ...state };

    switch(action.type) {
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        case REMOVE_USER: 
            delete newState[action.userId]
            return newState;
        default: 
            return state
    };
};

export default userReducer