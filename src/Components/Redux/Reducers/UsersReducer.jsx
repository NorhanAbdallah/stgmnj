import {USERS_FETCH, USER_EDIT, USER_DELETE} from '../Action/types';

const initalState = {
    list: []
   
}

export default function userReducer (state = initalState , action) {
    // console.log("ss",action.payload.users)
    console.log("ssdss",state.list)

    
    switch(action.type){

        case USERS_FETCH: 
            return {
                ...state,
                list: action.payload
            } 
            
        case USER_EDIT:{
            // let tmpList = state.list.slice();
            // tmpList.splice(action.payload.e , 1 , action.payload.v)
        
            return{
             ...state,
                list: action.payload
               
            }  
        } 
        case USER_DELETE:{
            let deleteList = state.list.slice();
            deleteList.splice(action.payload.id ,1)

        
            return{
                ...state,
                list: deleteList
            }   
        }
        default:
            return state     
    }
}