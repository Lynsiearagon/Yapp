// import { csrfFetch } from "./csrf"

// const SET_CURRENT_USER = `session/setCurrentUser`;
// const REMOVE_CURRENT_USER = `session/removeCurrentUser`

// const setCurrentUser = (user) => ({
//     type: SET_CURRENT_USER,
//     user 
// });

// const removeCurrentUser = () => ({
//     type: REMOVE_CURRENT_USER
// });


// export const login = (user) => async (dispatch) => {
//     const { email, password } = user; 
//     const res = await csrfFetch(`/api/session`, {
//         method: "POST", 
//         body: JSON.stringify({
//             email, password
//         })
//     });
//     const data = await res.json(); 
//     dispatch(setCurrentUser(data.user)); 
//     return res 
// };


// export const logout = (userId) => async (dispatch) => {
//     const res = await csrfFetch(`/api/session`, {
//         method: "DELETE", 
//     })
//     sessionStorage.setItem("currentUser", null)
//     dispatch(removeCurrentUser(userId));
// };


// const sessionReducer = (state = { user: null }, action) => {
    
//     switch(action.type) {
//         case SET_CURRENT_USER: 
//             return { ...state, user: action.user }
//         case REMOVE_CURRENT_USER: 
//             return { ...state, user: null }
//         default:
//             return state;
//     }
// };


// export default sessionReducer