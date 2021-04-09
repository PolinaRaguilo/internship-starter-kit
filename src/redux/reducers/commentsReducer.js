import {
  RECIEVED__COMMENTS,
  REQUEST__COMMENTS,
  FAIL__LOAD__COMMENTS,
} from '@/redux/actions/types';

const initialState = {
  commentsData: [],
  isLoadingComments: true,
  errComments: false,
};
const commentsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case RECIEVED__COMMENTS:
      return {
        ...state,
        commentsData: [...payload.comments],
        isLoadingComments: false,
        errComments: false,
      };
    case REQUEST__COMMENTS:
      return {
        ...state,
        isLoadingComments: true,
      };
    case FAIL__LOAD__COMMENTS:
      return {
        ...state,
        isLoadingComments: false,
        errComments: true,
      };
    default:
      return state;
  }
};

export { commentsReducer };
