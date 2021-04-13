import { combineReducers } from 'redux';
import { userReducer } from '@/redux/reducers/usersReducer';
import { commentsReducer } from '@/redux/reducers/commentsReducer';

const mainReducer = combineReducers({
  users: userReducer,
  comments: commentsReducer,
});

export default mainReducer;
