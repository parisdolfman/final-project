import {
    GET_CHARITIES,
    ADD_CHARITY,
    EDIT_CHARITY,
    DELETE_CHARITY,
    COMMENT_FORM,
    EDIT_COMMENT,
    DELETE_COMMENT
} from '../actionTypes'


import { getCurrentUser } from './currentUser'

const BASE_URL = 'http://localhost:3000'
const CHARITY_URL = `${BASE_URL}/charities`
const COMMENT_URL = `${BASE_URL}/comments`

