const initialState = {
  usersData: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECIEVED__USERS':
      return {
        ...state,
        usersData: [...action.users],
      };
    default:
      return state;
  }
};

export { userReducer };
