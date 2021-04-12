import {
  FETCH__ERROR__USERS,
  FETCH__USERS,
  FETCH__START__USERS,
} from '@/redux/actions/types';
import { API_URL } from '@/config/constants';

export const recievedUsers = (users) => {
  return { type: FETCH__USERS, payload: { users } };
};

export const requestUsers = () => {
  return { type: FETCH__START__USERS };
};

export const failLoadUsers = () => {
  return { type: FETCH__ERROR__USERS };
};

export const fethcUsers = () => async (dispatch) => {
  dispatch(requestUsers());
  try {
    const responseData = await fetch(`${API_URL}/users`);
    const response = await responseData.json();
    dispatch(recievedUsers(response));
  } catch (err) {
    dispatch(failLoadUsers());
  }
};
