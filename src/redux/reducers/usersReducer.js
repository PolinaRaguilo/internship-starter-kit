import {
  FAIL__LOAD,
  RECIEVED__USERS,
  REQUEST__USERS,
} from '@/redux/actions/types';

const initialState = {
  usersData: [],
  isLoading: true,
  err: false,
};
const userReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case RECIEVED__USERS:
      return {
        ...state,
        usersData: [...payload.users],
        isLoading: false,
        err: false,
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
