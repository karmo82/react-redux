import * as httpClientHolder from './httpClientHolder';

export function fetchUsers(){
    return httpClientHolder.getInstance().get('api/users');
}

export function getUser(id){
    return httpClientHolder.getInstance().get('api/users/' + id);
}

export function createUser(request){
    return httpClientHolder.getInstance().post('api/users', request);
}

export function updateUser(id, request){
    return httpClientHolder.getInstance().put('api/users/' + id, request);
} 

export function deleteUser(id){
    return httpClientHolder.getInstance().delete('api/users/' + id);
} 