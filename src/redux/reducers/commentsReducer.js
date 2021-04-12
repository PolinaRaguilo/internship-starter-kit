import {
  FETCH__COMMENTS,
  FETCH__START__COMMENTS,
  FETCH__ERROR__COMMENTS,
} from '@/redux/actions/types';

const initialState = {
  commentsData: [],
  isLoading: true,
  errComments: false,
};
const commentsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH__COMMENTS:
      return {
        ...state,
        commentsData: [...payload.comments],
        isLoading: false,
        errComments: false,
      };
    case FETCH__START__COMMENTS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH__ERROR__COMMENTS:
      return {
        ...state,
        isLoading: false,
        errComments: true,
      };
    default:
      return state;
  }
};

export { commentsReducer };
