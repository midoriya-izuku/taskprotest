import { db } from "./../firebase";
import { SET_USERS, USERS_ERROR, USERS_LOADING } from "./types";

//get all users from db
export const getUsers = () => async (dispatch) => {
  let users = {};
  try {
    dispatch({ type: USERS_LOADING });
    await db
      .ref("users")
      .once("value")
      .then((snapshot) => {
        users = snapshot.val();
      });
    dispatch({ type: SET_USERS, payload: users });
  } catch (err) {
    dispatch({ type: USERS_ERROR });
  }
};
