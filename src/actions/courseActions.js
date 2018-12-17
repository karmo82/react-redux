import * as types from './actionTypes';

export function createCourse(course){
    return {
        type: types.CREATE_COURSE,
        data: course
    };
}

export function getCourse(index){
    return {
        type: types.GET_COURSE,
        data: index
    };
}

export function updateCourse(course, index){
    return {
        type: types.UPDATE_COURSE,
        data: {course, index}
    };
}

export function deleteCourse(index){
    return {
        type: types.DELETE_COURSE,
        data: index
    };
}