import {
  FAIL__LOAD,
  RECIEVED__USERS,
  REQUEST__USERS,
} from '@/redux/actions/types';
import { API_URL } from '../../config/constants';

export const recievedUsers = (users) => {
  return { type: RECIEVED__USERS, payload: { users } };
};

export const requestUsers = () => {
  return { type: REQUEST__USERS };
};

export const failLoadUsers = () => {
  return { type: FAIL__LOAD };
};

export const fethcUsers = () => async (dispatch) => {
  dispatch(requestUsers());
  try {
    const responseData = await fetch(`${API_URL}/users`).then((response) =>
      response.json(),
    );
    dispatch(recievedUsers(responseData));
  } catch (err) {
    dispatch(failLoadUsers());
  }
};
