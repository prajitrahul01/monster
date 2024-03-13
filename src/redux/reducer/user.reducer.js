import { EDIT_OPEN_USER } from "../action/editOpen.action";
import { EDIT_USER } from "../action/editUser.action";
import { SEARCH_USER } from "../action/search.action";
import { SIGNUP_USER } from "../action/signup.action"

// Initial State
const initialUserState = {
    monsters: [],
    searchData: '',
    open: false,
    monster: {
        id: 0,
        user_id: 0,
        name: '',
        password: '',
        email: '',
      }
}
export const userReducer = (state = initialUserState, action) => {
    switch(action.type){
        case SIGNUP_USER:
            return {
                ...state,
                monsters: action.payload // Updating state
            }
        case SEARCH_USER:
            return {
                ...state,
                searchData: action.payload
            }
            case EDIT_USER:
                return {
                    ...state,
                    monster: action.payload
                }
                case EDIT_OPEN_USER:
                    return {
                        ...state,
                        open: action.payload
                    }
            
        default:
            return state;
    }
}

// const remembercheck = (state=initialUserState) => {
//     return {...state, monsters: [1,2,3,4] }
// }

// console.log(remembercheck())