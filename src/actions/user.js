import { db } from './../firebase';
import { SET_USERS } from './types';
export const getUsers =  () => async dispatch => {
    let users = {}
    await db
    .ref("users")
    .once("value")
    .then((snapshot) => {
        users = snapshot.val() 
    });
    console.log(users)
    dispatch({type:SET_USERS, payload: users})
}
