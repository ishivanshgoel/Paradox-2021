// action types
import { SETUSER, REMOVEUSER, SETADMIN, REMOVEADMIN } from './ActionTypes' 

// initial state
const initialState = {
    user: false,
    admin: false
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
        case SETADMIN:

            return{
                ... state,
                admin: action.token
            }
        case REMOVEADMIN:
            
            return{
                ...state,
                admin: false
            }
    default:
       return state;
    }
}

export default UserReducer 