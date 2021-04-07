import { FAIL__LOAD, RECIEVED__USERS, REQUEST__USERS } from './types';

export const recievedUsers = (users) => {
  return { type: RECIEVED__USERS, users };
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
    const responseData = await fetch(
      'https://jsonplaceholder.typicode.com/users',
    ).then((response) => response.json());
    dispatch(recievedUsers(responseData));
  } catch (err) {
    dispatch(failLoadUsers());
  }
};
