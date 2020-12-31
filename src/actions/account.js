import { db } from "./../firebase";
import { SET_ACCOUNTS, ACCOUNTS_ERROR, ACCOUNTS_LOADING } from "./types";

//get all accounts from db
export const getAccounts = () => async (dispatch) => {
  let accounts = {};
  try{
    dispatch({type:ACCOUNTS_LOADING})
    await db
    .ref("accounts")
    .once("value")
    .then((snapshot) => {
      accounts = snapshot.val();
    });
    dispatch({ type: SET_ACCOUNTS, payload: accounts });
  }
  catch(err){
      dispatch({type:ACCOUNTS_ERROR})
  }
  

};
