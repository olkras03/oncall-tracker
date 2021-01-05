import { combineReducers } from 'redux';
// import userReducer from './userReducer';
import alert from './alert';
import auth from './auth';

export default combineReducers({
    alert,
    auth
    // user: userReducer
});