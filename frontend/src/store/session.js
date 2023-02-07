import csrfFetch from './csrf';

const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user
});

export const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

export const storeCSRFToken = (response) => {
  const csrfToken = response.headers.get("X-CSRF-Token");
  if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
};
  
export const storeCurrentUser = (user) => {
  if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
  else sessionStorage.removeItem("currentUser");
};

export const signUpUser = (user) => async (dispatch) => {
  const { email, first_name, last_name, password, zipcode, birthday} = user;
  const res = await csrfFetch("/api/users", {
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
};  

export const login = ({ email, password }) => async (dispatch) => {
  const res = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    })
  });
  const data = await res.json();
//   storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return res;
};

export const restoreSession = () => async dispatch => {
  const res = await csrfFetch("/api/session");
  storeCSRFToken(res);
  const data = await res.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return res;
};

export const logoutUser = () => async (dispatch) => {
  const res = await csrfFetch('/api/session', {
    method: 'DELETE'
  });
  storeCurrentUser(null);
  dispatch(removeCurrentUser());
  return res
};

const initialState = { 
  user: JSON.parse(sessionStorage.getItem("currentUser"))
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.user };
    case REMOVE_CURRENT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;
