import { SET_ACCOUNTS, ACCOUNTS_LOADING,ACCOUNTS_ERROR } from './../actions/types';

const initialState = {
    allAccounts:{}, 
    loading: false
}

export default function account(state = initialState, action){
    const { payload, type } = action
    switch(type){
        case SET_ACCOUNTS:
            return {
                ...state,
                allAccounts:payload, 
                loading:false
            }
        case ACCOUNTS_LOADING:
            return {
                ...state,
                loading:true
            }
        case ACCOUNTS_ERROR:
            return {
                ...state,
                allAccounts:{},
                loading:false
            }
        default:
            return state
    }
}