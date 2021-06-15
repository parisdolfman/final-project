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
    }
}