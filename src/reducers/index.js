import { combineReducers } from "redux";
import user from './user'
import account from './account'
export default combineReducers({
    user,
    account
})