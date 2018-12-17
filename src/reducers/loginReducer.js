import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function UserReducer(state = initialState.user, action){
    switch(action.type){
        case types.LOGIN_SUCCESS:
            console.log(action);
            return {...state, username: action.username, isLogged: true};
        case types.LOGOUT:
            return {...state, username: '', isLogged: false};
        default:
            return state;
    }
}