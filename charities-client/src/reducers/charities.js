import {
    GET_CHARITIES,
    ADD_CHARITY,
    EDIT_CHARITY,
    DELETE_CHARITY,
    SET_SELECTED_CHARITY,
    UNSET_CHARITY,
    COMMENT_FORM_UPDATE,
    SET_COMMENT,
    SET_FORM_DATA_EDIT_COMMENT,
    RESET_FORM_DATA_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    FILTER_FORM_CHANGE
  } from '../actionTypes'
  
  const nullCommentForm = {
    content: '',
  }
  
  const initialState = {
    charities: [],
    commentForm: nullCommentForm,
    filtersForm: {
      searchOption: 'name',
      search: '',
      filter: 'All',
      sort: 'alphabetically',
    }
  }
  
  export function charitiesReducer(state = initialState, action) {
    switch(action.type){
      case GET_CHARITIES:
        return {...state, charities: action.charities}
      case FILTERS_FORM_CHANGE:
        return {...state, filtersForm: {
          ...state.filtersForm, [action.payload.name]: action.payload.value
        }}
      case ADD_CHARITY:
        return {
          ...state,
          charities: [...state.charities, action.charities]
        }
      case EDIT_CHARITY:
        return {
          ...state, 
          charities: [...state.charities.map(charity => charity.id === action.charity.id ? action.charity : charity)]
        }
      
        // case DELETE_CHARITY
        // case SET_SELECTED_CHARITY
        // case UNSET_CHARITY
        // case COMMENT_FORM_UPDATE
        // case SET_COMMENT
        // case SET_FORM_DATA_EDIT_COMMENT
        // case RESET_FORM_DATA_COMMENT
        // case EDIT_COMMENT
        // case DELETE_COMMENT
        // case FILTER_FORM_CHANGE


    }
  }