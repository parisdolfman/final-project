import {
    GET_CHARITIES,
    ADD_CHARITY,
    EDIT_CHARITY,
    DELETE_CHARITY,
    SET_SELECTED_CHARITY,
    UNSET_CHARITY,

    COMMENT_FORM_UPDATE,
    SET_COMMENT,
    RESET_FORM_DATA_COMMENT,
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

export const addCharity = (charity) => {
    return dispatch => {
        const charityInfo = {
            image: charity.image,
            category: charity.category
            name: charity.name
        }
        return fetch(CHARITY_URL, {
            credentials: "include"
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(charityInfo)
        })
        .then(response => response.json())
        .then(charity => {
            if (charity.error) {
                alert(charity.error)
            } else {
                dispatch({
                    //add a news charity}
            })
            // get current user
          }
        })
        .catch((error) => {
            console.log(error)
        });
    }
}

export const deleteCharity = () => {
    // need delete charity method
}


