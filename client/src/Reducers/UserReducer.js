// action types
import { SETUSER, REMOVEUSER } from './ActionTypes' 

// initial state
const initialState = {
    user: false
};

// action reducer
function UserReducer(state = initialState, action) {
    switch(action.type) {
        case SETUSER:
           
            return {
                ...state,
                user: action.token
            }
        case REMOVEUSER:
            
            return {
                ...state,
                user: false
            }
    default:
       return state;
    }
}

export default UserReducer 