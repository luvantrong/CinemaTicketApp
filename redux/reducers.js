const initialState = {
  isLoggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, isLoggedIn: action.payload};
    default:
      return state;
  }
};
