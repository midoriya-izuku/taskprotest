import { db } from './../firebase';
import { SET_ACCOUNTS } from './types';
export const getAccounts =  () => async dispatch => {
    let accounts = {}
    await db
    .ref("accounts")
    .once("value")
    .then((snapshot) => {
        accounts = snapshot.val() 
    });
    console.log(accounts)

    dispatch({type:SET_ACCOUNTS, payload: accounts})
}
