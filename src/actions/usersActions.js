import * as types from './actionTypes';
import * as userServices from '../services/userServices';

export function dispathFetchUsers(list){

    return {
        type: types.FETCH_USER,
        list
    };
}

export function dispathCreateUser(entity){

    return {
        type: types.CREATE_USER,
        entity
    };
}

export function dispathGetUser(entity){

    return {
        type: types.GET_USER,
        entity
    };
}

export function fetchUsers(){

    // redux thunk!
    return function(dispatch){
        return userServices.fetchUsers().then(
            response => {
                console.info("users received")

                dispatch(dispathFetchUsers(response.data));
            }, 
            error => {
                console.error(error);
            });
    }    
}

export function createUser(entity){
    return function(dispatch){
        return userServices.createUser(entity).then(
            response => {
                dispatch(dispathCreateUser(response.data));
            }
            , error => {
                console.error(error)
            });
    }
}

export function getUser(id){
    return function(dispatch){
        return userServices.getUser(id).then(
            response => {
                console.info("user single received")
                dispatch(dispathGetUser(response.data));
            }
            , error => {
                console.error(error)
            });
    }
}

