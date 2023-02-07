import {receiveUser} from './userReducer'


const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user)); 
    else sessionStorage.removeItem("currentUser");
};

export const restoreSession = () => async (dispatch) => {
    const res = await csrfFetch('/api/session');
    sessionStorage(res); 
    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(receiveUser(data.user));
    return res 
};


export const csrfFetch = async (url, options = {}) => {
    options.method ||= 'GET';
    options.headers ||= {};

    // will need to modify this when using formData to attach resources like photos
        // can't have a Content-Type header
    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] = 'application/json';
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
    }

    const res = await fetch(url, options);
    return res
};

const initialState = { 
    user: JSON.parse(sessionStorage.getItem("currentUser"))
};
  