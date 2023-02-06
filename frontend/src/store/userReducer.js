

const RECEIVE_USER = `users/RECEIVE_USER`; 

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
}); 


const userReducer = (state = {}, action) => {
    const newState = { ...state };

    switch(action.type) {
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        default: 
            return state; 
    }
}

export default userReducer