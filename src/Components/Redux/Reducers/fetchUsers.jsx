import {fetchUsersSuccess, editUserSuccess , deleteUserSuccess} from '../Action/UsersAction'
import Axios from 'axios'


export function fetchUsers() {

        // dispatch(fetchUsersSuccess(arr))
        return dispatch => {
            let url = 'https://jsonplaceholder.typicode.com/users/'
            Axios.get(url, {
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(response => {
                console.log("redux Response ya batta",response.data)
                dispatch(fetchUsersSuccess(response.data))
               
                return response.data;
            }).catch(error => console.log("Redux Fetch Error" , error))
        }
    }


export function editUser(e,v) {
    // console.log("new", user)
    return dispatch => {
        dispatch(editUserSuccess(e,v))
    }
}

export function deleteUser (id) {
    return dispatch => {
        dispatch(deleteUserSuccess(id))
    }
}

/* FETCH USER */ 
export async function fetchUser(id) {
 const response = await Axios.get('https://jsonplaceholder.typicode.com/users/'+id)
 return response;

}