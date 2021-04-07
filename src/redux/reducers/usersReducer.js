import { FAIL__LOAD, RECIEVED__USERS, REQUEST__USERS } from '../actions/types';

const initialState = {
  usersData: [],
  isLoading: true,
  err: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIEVED__USERS:
      return {
        ...state,
        usersData: [...action.users],
        isLoading: false,
      };
    case REQUEST__USERS:
      return {
        ...state,
        isLoading: true,
      };
    case FAIL__LOAD:
      return {
        ...state,
        isLoading: false,
        err: true,
      };
    default:
      return state;
  }
};

export { userReducer };
