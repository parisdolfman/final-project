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
            type: SET_CURRENT_USER,
            user: response
            })
            history.push('/')
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
                'Content-Type': "application/json"
            },
            body:JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error) 
                } else {
                    dispatch({
                        type: SET_CURRENT_USER
                        user: response
                    })
                    history.push('/')
            }
        }) 
        .catch(console.log)
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch(`${URL}/get_current_user`, {
            credentials: "include",
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                console.log(error)
            } else {
                dispatch({
                    type: SET_CURRENT_USER,
                    user:response
                })
            }
        })
        .catch(console.log)
    }
}

