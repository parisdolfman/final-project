import { 
    SET_CURRENT_USER, 
    CLEAR_CURRENT_USER,
    BEGIN_AUTH,
    COMPLETE_AUTH
  } from "../actiontypes"
  
  export function currentUserReducer(state = { currentUser: {}, authComplete: false}, action) {
    switch(action.type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          currentUser: action.user,
        }
      case CLEAR_CURRENT_USER:
    
      case BEGIN_AUTH:
       
      case COMPLETE_AUTH:
      
      default:
        return state
    }
  }