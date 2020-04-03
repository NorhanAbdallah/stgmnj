import { combineReducers } from "redux";
import userReducer from './UsersReducer'

export default combineReducers({
   users: userReducer
})

