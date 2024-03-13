import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./action/action";
const initialState = {
    monsters: [],
    isLoading: false,
    error: null
}
export const fetchReducer = (state = initialState, action) => {
 
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                monsters: action.payload
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
 
    }
}