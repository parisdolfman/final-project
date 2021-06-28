import { charitystate } from '../store/initialState';
import {
  GET_ALL_CHARITIES,
  GET_CATEGORIES,
  GET_ALL_COMMENTS,
} from '../actionTypes';

const charityReducer = (state = charitystate, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case GET_ALL_CHARITIES:
      return {
        charities: payload,
        ...state,
      };
    case GET_CATEGORIES:
      return {
        categories: payload,
        ...state,
      };
    case GET_ALL_COMMENTS:
      return {
        comments: payload,
        ...state,
      };
    default:
      return state;
  }
};

export default charityReducer;
