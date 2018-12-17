import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function usersReducer(state = initialState.users, action){
    console.log("usersReducer");
    console.log(action);
    
    switch(action.type){
        case types.FETCH_USER:            
            return {...state, list: action.list};
        case types.CREATE_USER:     
            var list = [...state.list];
            list.push(action.entity);
            return {...state, list};
        case types.GET_USER:     
            return {...state, current: action.entity};
        default: 
            return state;
    }
}