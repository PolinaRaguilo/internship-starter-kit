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
const userReducer = produce((draft, action) => {
  const { payload, type } = action;
  switch (type) {
    case RECIEVED__USERS:
      draft.usersData = payload.users;
      draft.isLoading = false;
      draft.err = false;
      break;
    case REQUEST__USERS:
      draft.isLoading = true;
      break;
    case FAIL__LOAD:
      draft.isLoading = false;
      draft.err = true;
      break;
  }
}, initialState);
// const userReducer = (state = initialState, action) => {
//   const { payload } = action;
//   switch (action.type) {
//     case RECIEVED__USERS:
//       return produce(state, (draft) => {
//         (draft.usersData = payload.users),
//           (draft.isLoading = false),
//           (draft.err = false);
//       });
//     case REQUEST__USERS:
//       return produce(state, (draft) => {
//         draft.isLoading = true;
//       });

//     case FAIL__LOAD:
//       return produce(state, (draft) => {
//         (draft.isLoading = false), (draft.err = true);
//       });
//     default:
//       return state;
//   }
// };

export { userReducer };
