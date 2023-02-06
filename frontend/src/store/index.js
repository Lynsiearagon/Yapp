import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import userReducer from './userReducer';
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    user: userReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
};

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore

// await store.dispatch(sessionActions.login({ email: 'Lynsie@mail.com', password: 'password' }))