import {
  FETCH__COMMENTS,
  FETCH__START__COMMENTS,
  FETCH__ERROR__COMMENTS,
} from '@/redux/actions/types';
import { API_URL } from '@/config/constants';

export const recievedComments = (comments) => {
  return { type: FETCH__COMMENTS, payload: { comments } };
};

export const requestComments = () => {
  return { type: FETCH__START__COMMENTS };
};

export const failLoadComments = () => {
  return { type: FETCH__ERROR__COMMENTS };
};

export const fetchComments = () => async (dispatch) => {
  dispatch(requestComments());
  try {
    const responseComments = await fetch(`${API_URL}/comments`);
    const response = await responseComments.json();
    dispatch(recievedComments(response.slice(0, 15)));
  } catch (err) {
    dispatch(failLoadComments());
  }
};
