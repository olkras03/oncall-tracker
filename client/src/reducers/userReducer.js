import uuid from 'react-uuid';
import { GET_USERS, ADD_USER, DELETE_USER } from '../actions/types';

const initialState = {
    users: [
        { id: uuid(), name: 'Lena' },
        { id: uuid(), name: 'John' },
        { id: uuid(), name: 'Rekha' },
        { id: uuid(), name: 'Mike' },
    ]
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
        default:
            return state;
    }
}