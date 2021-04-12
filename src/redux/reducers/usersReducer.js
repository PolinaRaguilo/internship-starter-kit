import {
  FETCH__USERS,
  FETCH__ERROR__USERS,
  FETCH__START__USERS,
} from '@/redux/actions/types';

const initialState = {
  usersData: [],
  isLoading: true,
  err: false,
};
const userReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH__USERS:
      return {
        ...state,
        usersData: [...payload.users],
        isLoading: false,
        err: false,
      };
    case FETCH__START__USERS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH__ERROR__USERS:
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
