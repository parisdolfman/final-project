import { LOGIN_NEW_USER, SIGN_UP_NEW_USER } from '../actionTypes';
import { initialState } from '../store/initialState';
const authReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case LOGIN_NEW_USER:
      return {
        current_user: payload,
        ...state,
      };

    case SIGN_UP_NEW_USER:
      return {
        current_user: payload,
        ...state,
      };

    default:
      return state;
  }
};

export default authReducer;
