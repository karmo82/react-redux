import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function courseReducer(state = initialState.courses, action){
    console.log(action);

    switch(action.type){
        case types.CREATE_COURSE:
            
            /*
                restituisco un nuovo array
                ...state = estrae tutti i record presenti nell'array, non crea una copia ma una nuova lista!
                , Object  => aggiunge in push un "clone" di action.course
            */
            var courseList = [...state.list];
            console.log("courseList");
            console.log(courseList);
            courseList.push(action.data);
            //return [...state, Object.assign({}, action.course)];
            return {...state, list: courseList};
        case types.GET_COURSE:
            console.info("GET_COURSE reducer");
            /*
                restituisco un nuovo array
                ...state = estrae tutti i record presenti nell'array, non crea una copia ma una nuova lista!
                , Object  => aggiunge in push un "clone" di action.course
            */
            var courseList = [...state.list];
            if(courseList !== null && courseList.length > 0)
            {
                console.log(courseList[action.data]);
                return {...state, selected: Object.assign({}, courseList[action.data] ) };
            }
            return {...state, selected: null};      
            
        case types.DELETE_COURSE:
            console.info("DELETE_COURSE reducer");

            var courseList = [...state.list];

            courseList = courseList.filter(function(value, currIndex, arr){

                return currIndex != action.data;
            
            });

            return {...state, list: courseList};   

        case types.UPDATE_COURSE:
            console.info("UPDATE_COURSE reducer");
            var courseList = [...state.list];
            courseList[action.data.index] = action.data.course;
            return {...state, list: courseList};
        default:
            return state;
    }
}