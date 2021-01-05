import { combineReducers } from 'redux';
// import userReducer from './userReducer';
import alert from './alert';

export default combineReducers({
    alert,
    // user: userReducer
});