import { combineReducers } from 'redux';
import { userReducer } from './usersReducer';

const mainReducer = combineReducers({ users: userReducer });

export default mainReducer;
