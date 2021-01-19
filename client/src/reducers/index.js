import { combineReducers } from 'redux';
// import userReducer from './userReducer';
import alert from './alert';
import auth from './auth';
import profile from './profile';

export default combineReducers({
    alert,
    auth,
    profile
    // user: userReducer
});