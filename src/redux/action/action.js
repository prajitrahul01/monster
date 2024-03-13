
import axios from "axios";
// Action Types: 
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// ACTION creators
export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
})

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
})

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
})

// thunk action creator

export const fetchData = () => {
    console.log('fetchData')
    return (dispatch) => {
        dispatch(fetchDataRequest())
        axios.get('http://localhost:8085/user/getAll')
        .then(response=>{
            const data = response.data
            console.log("Response: ", response)
            dispatch(fetchDataSuccess(data))
        }).catch(error => 
            dispatch(fetchDataFailure(error))
        )
    }
}