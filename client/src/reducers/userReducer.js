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
        default:
            return state;
    }
}