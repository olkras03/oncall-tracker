import uuid from 'react-uuid';
import { GET_USERS, ADD_USER, DELETE_USER, USERS_LOADING } from '../actions/types';

const initialState = {
    users: []
    loading: false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload) //to access id from userActions
            }

        case ADD_USER:
            return {
                ...state,
                users: [action.payload, ...state.users] //to add user to the array
            }
        default:
            return state;
    }
}