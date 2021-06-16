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
    DELETE_COMMENT

    FILTER_FORM_CHANGE
} from '../actionTypes'


import { getCurrentUser } from './currentUser'


const BASE_URL = 'http://localhost:3000'
const CHARITY_URL = `${BASE_URL}/charities`
const COMMENT_URL = `${BASE_URL}/comments`

export const getCharities = () => {
    return (dispatch) => {
        fetch(CHARITY_URL, {
            credentials: 'include',
        })
        .then(response => response.json())
        .then(charities => dispatch({
            type: GET_CHARITIES,
            charities
        }))
    }
}

export const addCharity = (charityInfo) => {
    return dispatch => {
        const sendCharityInfo = {
            image: charityInfo.image,
            category: charityInfo.category,
            name: charityInfo.name
        }
        return fetch(CHARITY_URL, {
            credentials: "include"
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(sendCharityInfo)
        })
        .then(response => response.json())
        .then(charity => {
            if (charity.error) {
                alert(charity.error)
            } else {
                dispatch({
                   type: ADD_CHARITY,
                   charity
            })
            dispatch(getCurrentUser())
          }
        })
        .catch((error) => {
            console.log(error);
        });
    }
}


export const editCharity = (charityInfo) => {
    return dispatch => {
        const sendCharityInfo = {
            image: charityInfo.image,
            category: charityInfo.category,
            name: charityInfo.name
        }
        return fetch(`${CHARITY_URL}/${charityInfo.id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(sendCharityInfo), 
        })
        .then(response => response.json())
        .then(charity => {
            if (charity.error) {
                alert(charity.error)
            } else {
                dispatch({
                    type: EDIT_CHARITY,
                    charity
                })
                dispatch(getCurrentUser())
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

export const deleteCharity = (charityId) => {
    return (dispatch) => {
        return fetch(`${CHARITY_URL}/${charityId}`,{
            credentials: "include"
            method: "DELETE"
        })
        .then(response => response.json())
        .then(() => {
            dispatch({
                type: DELETE_CHARITY,
                charityId
            })
            dispatch(getCurrentUser())
        })
    }
}

export const setSelectedCharity = (charityId) => {
    return dispatch => {
        fetch(`${CHARITY_URL}/${charityId}`, {
            credentials: "include",
        })
        .then(response = respons.json())
        .then(charity => dispatch({
            type: SET_SELECTED_CHARITY,
            charity
        }))
    }
}

export const unsetCharity = () => ({
    type: UNSET_CHARITY 
})

export const commentFormUpdate = (event) => ({
    type: COMMENT_FORM_CHANGE,
    payload: {name: event.target.name, value: event.target.value}
})

export const setComment = commentInfo => {
  return dispatch => {
      fetch(COMMENT_URL, {
          credentials: "include",
          method: "POST"
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentInfo),
      })
      .then(response => response.json())
      .then(comment => dispatch({
          type: RESET_FORM_DATA_COMMENT
      }))
  }
}

export const setFormDataEditComment = description => {
  return {
      type: SET_FORM_DATA_EDIT_COMMENT
      description
  }
}

export const resetFormDataComment = () => {
  return {
      type: RESET_FORM_DATA_COMMENT
  }
}

export const editComment = (commentInfo, commentId) => {
    return dispatch => {
        fetch(`$COMMENT_URL/${commentId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentInfo),
        })
        .then(response => response.json())
        .then(charity => dispatch({
            type: EDIT_COMMENT,
            charity
        }))
    }
}

export const deleteComment = (commentId) => {
  return (dispatch) => {
      return fetch(`${COMMENT_URL}/${commentId}`, {
          credentials: "include",
          method: "DELETE",
      })
      .then(response => response.json())
      .then (charity => {
          dispatch({
              type: DELETE_COMMENT,
              charity
          })
      })
  }
}

export const filterFormChange = (event) => ({
    type: FILTER_FORM_CHANGE,
    payload: {name: event.target.name, value: event.target.value}
})



