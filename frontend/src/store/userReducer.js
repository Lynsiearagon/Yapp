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

export const createUser = (user) => async (dispatch) => {
    let res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(user)
    });
    let data = await res.json();
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    dispatch(receiveUser(data.user));
};

export const loginUser = (user) => async (dispatch) => {
    let res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify(user)
    });
    let data = await res.json();
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    debugger
    dispatch(receiveUser(data.user))
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
    let res = await csrfFetch('/api/session', {
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
        dispatch(removeUser(reportId))
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