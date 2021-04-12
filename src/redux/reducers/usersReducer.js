import {
  FAIL__LOAD,
  RECIEVED__USERS,
  REQUEST__USERS,
} from '@/redux/actions/types';
import produce from 'immer';

const initialState = {
  usersData: [],
  isLoading: true,
  err: false,
};
const userReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case RECIEVED__USERS:
      return produce(state, (draft) => {
        (draft.usersData = payload.users),
          (draft.isLoading = false),
          (draft.err = false);
      });
    case REQUEST__USERS:
      return produce(state, (draft) => {
        draft.isLoading = true;
      });

    case FAIL__LOAD:
      return produce(state, (draft) => {
        (draft.isLoading = false), (draft.err = true);
      });
    default:
      return state;
  }
};

export { userReducer };
