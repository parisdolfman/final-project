import { SIGN_UP_NEW_USER, LOGIN_NEW_USER } from '../actionTypes';
import { setCurrentUser, logoutUser } from '../helpers';

const BASE_URL = 'http://127.0.0.1:3000';

export const signUp_user = (user_info) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(user_info),
    });
    if (await response.ok) {
      const data = await response.json();
      setCurrentUser(data);

     return dispatch({
        type: SIGN_UP_NEW_USER,
        payload: data,
      });
    } else {
      logoutUser();
    }
  } catch (error) {
    console.error(error);
  }
};

export const login_user = (user_info) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(user_info),
    });
    if (await response.ok) {
      const data = await response.json();
      setCurrentUser(data);
      return dispatch({
        type: LOGIN_NEW_USER,
        payload: data,
      });
    } else {
      logoutUser();
    }
  } catch (error) {
    console.error(error);
  }
};
