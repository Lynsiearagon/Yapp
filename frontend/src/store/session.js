import csrfFetch from './csrf';

const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    user
});

const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
});

export const signUpUser = (user) => async (dispatch) => {
    const { email, first_name, last_name, password, zipcode, birthday} = user;
    const res = await csrfFetch("/api/session/", {
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
    dispatch(setCurrentUser(data.user));
}  


export const login = (user) => async (dispatch) => {
  const { email, password } = user;
  const res = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
        email,
        password
    })
  });
  const data = await res.json();
  dispatch(setCurrentUser(data.user));
  return res;
};

export const logoutUser = () => async (dispatch) => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    });
    sessionStorage.setItem('currentUser', null)
    dispatch(removeCurrentUser());
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.payload };
    case REMOVE_CURRENT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;

// await store.dispatch(sessionActions.login({ email: 'Lynsie@mail.com', password: 'password' }))