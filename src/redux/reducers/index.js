import { combineReducers } from 'redux';
import { userReducer } from './usersReducer';

const mainReducer = combineReducers({ userReducer });

export default mainReducer;
