import {
  FETCH__USERS,
  FETCH__ERROR__USERS,
  FETCH__START__USERS,
  UPDATE__USER,
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
    case UPDATE__USER:
      return {
        ...state,
        usersData: state.usersData.map((user) =>
          user.id === payload.updateUser.id ? payload.updateUser : user,
        ),
      };
    default:
      return state;
  }
};

export { userReducer };
