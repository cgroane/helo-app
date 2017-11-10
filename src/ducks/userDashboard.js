import axios from 'axios';
// import default from 'axios';

//action constants
const REQ_USER = "REQ_USER";
const GET_RECOMMENDED = "GET_RECOMMENDED";


//initial state
const initialState = {
    user: {},
    recommended: []
}

//reducer
export default function userDashboard(state = initialState, action) {
    switch(action.type) {
        case REQ_USER + "_PENDING":
            return Object.assign({}, state, {isLoading: true})
        case REQ_USER + "_FULFILLED":
            return Object.assign({}, state, {user: action.payload, isLoading: false})
        case GET_RECOMMENDED + "_PENDING":
            return Object.assign({}, state, {isLoading: true})
        case GET_RECOMMENDED + "_FULFILLED":
            return Object.assign({}, state, {recommended: action.payload, isLoading: false})
        default:
            return state;
    }
}

//action creators

export function requestUser() {
    return {
        type: REQ_USER,
        payload: axios.get("/api/me").then(response => response.data)
        // check this endpoint with Leah, Kelly
    }
}

export function getRecommended() {
    return {
        type: GET_RECOMMENDED,
        payload: axios.get('/api/test').then(response => response.data)
    }
}