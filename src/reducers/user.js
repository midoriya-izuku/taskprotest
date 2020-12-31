import { SET_USERS, USERS_LOADING,USERS_ERROR } from './../actions/types';

const initialState = {
    allUsers:{}, 
    loading: false
}

export default function user(state = initialState, action){
    const { payload, type } = action
    switch(type){
        case SET_USERS:
            return {
                ...state,
                allUsers:payload, 
                loading:false
            }
        case USERS_LOADING:
            return {
                ...state,
                loading:true
            }
        case USERS_ERROR:
            return {
                ...state,
                allUsers:{},
                loading:false
            }
        default:
            return state
    }
}