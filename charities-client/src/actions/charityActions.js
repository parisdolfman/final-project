import {
    GET_ALL_CHARITIES,
    DELETE_CHARITY,
    UPDATE_CHARITY,
    ADD_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT,
    GET_CATEGORIES,
    GET_ALL_COMMENTS,
    CHANGE_FILTER,
  } from '../actionTypes';
  
  const BASE_URL = 'http://127.0.0.1:3000';
  
  export const getAllCharities = () => async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/charities`, {
        method: 'GET',
        headers: { 'Content-Type': 'Application/json' },
      });
      if (await response.ok) {
        const data = await response.json();
        return dispatch({
          type: GET_ALL_CHARITIES,
          payload: data,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  export const createCharty = (charity) => async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/charities`, {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(charity),
      });
      if (await response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_ALL_CHARITIES,
          payload: data,
        });
        getAllCharities();
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };
  export const getCategories = () => async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/categories`, {
        method: 'GET',
        headers: { 'Content-Type': 'Application/json' },
      });
      if (await response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_CATEGORIES,
          payload: data,
        });
        getAllCharities();
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };
  export const deleteCharity = (id) => async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/charities/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: { 'Content-Type': 'Application/json' },
      });
      if (await response.ok) {
        const data = await response.json();
        dispatch({
          type: DELETE_CHARITY,
          payload: data,
        });
        getAllCharities();
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };
  export const updateCharity = (charity_info, id) => async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/charities/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(charity_info),
      });
      if (await response.ok) {
        const data = await response.json();
        dispatch({
          type: UPDATE_CHARITY,
          payload: data,
        });
        getAllCharities();
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  export const getAllComments = () => async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/comments`, {
        method: 'GET',
        headers: { 'Content-Type': 'Application/json' },
      });
      if (await response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_ALL_COMMENTS,
          payload: data,
        });
        getAllCharities();
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };
  export const addComment = (comment) => async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(comment),
      });
      if (await response.ok) {
        const data = await response.json();
        dispatch({
          type: ADD_COMMENT,
          payload: data,
        });
        getAllComments();
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };
  export const updateComment = (comment) => async (dispatch) => {
    console.log(comment.id);
    console.log(comment);
    try {
      const response = await fetch(`${BASE_URL}/comments/${comment.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({ description: comment.description }),
      });
      if (await response.ok) {
        const data = await response.json();
        dispatch({
          type: UPDATE_COMMENT,
          payload: data,
        });
        getAllComments();
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  export const deleteComment = (id) => async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/comments/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'Application/json' },
      });
      if (await response.ok) {
        const data = await response.json();
        dispatch({
          type: ADD_COMMENT,
          payload: data,
        });
        getAllComments();
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  export const chanegFilter = (payload) => {
    return { type: CHANGE_FILTER, payload };
  };
  



