import { combineReducers } from 'redux';
import { userReducer } from '@/redux/reducers/usersReducer';

const mainReducer = combineReducers({ users: userReducer });

export default mainReducer;
