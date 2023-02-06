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
    }
};


export const fetchUser = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}`)
    
    if (res.okay) {
        const user = await res.json(); 
        dispatch(receiveUser(user))
    };
}

export const createUser = (userObj) => async (dispatch) => {
    const res = await fetch(`/api/users/`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
        }, 
        body: JSON.stringify(userObj)
    })

    if (res.ok) {
        const user = await res.json();
        dispatch(receiveUser(user))
    }
};

export const updateUser = (userObj) => async (dispatch) => {
    const res = await fetch(`/api/users/${userObj.id}`, {
        method: "PATCH",
        headers: {
            "Context-Type" : "application/json"
        },
        body: JSON.stringify(userObj)
    })

    if (res.ok) {
        const user = await res.json(); 
        dispatch(receiveUser(user))
    }
};

export const deleteUser = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}`, {
        method: "DELETE"
    })

    if (res.ok) {
        dispatch(removeUser(reportId))
    }
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
    }
};

export default userReducer