import {
  FETCH__USERS,
  FETCH__ERROR__USERS,
  FETCH__START__USERS,
  UPDATE__USER,
} from '@/redux/actions/types';
import produce from 'immer';

const initialState = {
  usersData: [],
  isLoading: true,
  err: false,
};

const userReducer = produce((draft, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH__USERS:
      draft.usersData = payload.users;
      draft.isLoading = false;
      draft.err = false;
      break;
    case FETCH__START__USERS:
      draft.isLoading = true;
      break;
    case FETCH__ERROR__USERS:
      draft.isLoading = false;
      draft.err = true;
      break;
    case UPDATE__USER:
      draft.usersData = draft.usersData.map((user) =>
        user.id === payload.updateUser.id ? payload.updateUser : user,
      );
  }
}, initialState);

export { userReducer };
