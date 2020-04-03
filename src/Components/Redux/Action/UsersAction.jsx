import {USERS_FETCH,USER_DELETE, USER_EDIT} from'./types'


export function fetchUsersSuccess  (users) {
    console.log("dkkkkkkkkkkkkkkkkkk", users)
    return {
    type: USERS_FETCH,
    payload: users
 }
}

export function editUserSuccess(v) {
    // console.log("users el fadya", users)
    return {
        type: USER_EDIT,
        payload: v
     }  
}

export function deleteUserSuccess (id){
    return {
        type: USER_DELETE,
        payload: id
    }
}

