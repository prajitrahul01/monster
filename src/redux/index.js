import {createStore, combineReducers, applyMiddleware} from 'redux';
import {userReducer} from './reducer/user.reducer';
import { thunk } from 'redux-thunk';
import { fetchReducer } from './reducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    user: userReducer,
    fetchUser: fetchReducer
})

const middlewares = [logger, thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;