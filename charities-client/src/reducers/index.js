import { currentUserReducer } from './currentUser'
import { charitiesReducer } from './charities'


import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  charities: charitiesReducer

})

export default rootReducer