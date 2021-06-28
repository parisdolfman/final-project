import { combineReducers } from 'redux';
import authReducer from './authReducer';
import charityReducer from './charityReducer';
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
  user: authReducer,
  charity: charityReducer,
  filter: filterReducer
});

export default rootReducer;
