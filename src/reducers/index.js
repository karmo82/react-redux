import {combineReducers } from 'redux';
import courses from './courseReducer';
import login from './loginReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
    // nello store verrà creato uno state di nome courses, utilizzabile dai componenti react
    courses,
    login,
    users
});

export default rootReducer;