import {
  RECIEVED__COMMENTS,
  REQUEST__COMMENTS,
  FAIL__LOAD__COMMENTS,
} from '@/redux/actions/types';
import { API_URL } from '../../config/constants';

export const recievedComments = (comments) => {
  return { type: RECIEVED__COMMENTS, payload: { comments } };
};

export const requestComments = () => {
  return { type: REQUEST__COMMENTS };
};

export const failLoadComments = () => {
  return { type: FAIL__LOAD__COMMENTS };
};

export const fetchComments = () => async (dispatch) => {
  dispatch(requestComments());
  try {
    const responseComments = await fetch(
      `${API_URL}/comments`,
    ).then((response) => response.json());
    dispatch(recievedComments(responseComments.slice(0, 15)));
  } catch (err) {
    dispatch(failLoadComments());
  }
};
