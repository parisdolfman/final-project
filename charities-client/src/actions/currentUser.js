import {
    SET_CURRENT_USER,
    CLEAR_CURRENT_USER
} from '../actionTypes'

const URL = 'http://localhost:3000'

export const login = (credentials) => {
    return dispatch => {
        return fetch(`$URL/login`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(response => {
            alert(response.error)
        } else {
            dispatch({
            //set the current user
            })
        }
        })
        .catch(console.log)
    }
}

export const signup = (credentials) = > {
    return dispatch => {
        return fetch(`${URL}/signup`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error) 
                } else {
                    dispatch({
                        //take current user response and create new user
                    })
            }
        }) 
        .catch(console.log)
    }
}