import { GET_USERS, ADD_USER, DELETE_USER } from './types';


export const getUsers = () => {
    return {
        type: GET_USERS
    };
};

export const deleteUser = () => {
    return {
        type: DELETE_USER
    };
};