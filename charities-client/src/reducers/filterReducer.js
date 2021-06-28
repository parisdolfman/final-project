import {CHANGE_FILTER} from '../actionTypes/index'

const filterReducer = (state = 'All', actions) => {
    const {type, payload} = actions
    switch (type) {
        case CHANGE_FILTER:
            return payload
        default:
            return state;
    }
}

export default filterReducer