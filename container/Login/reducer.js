import { LOGIN,LOGIN_SUCCESS,LOGIN_FAILURE } from './actionTypes';

const initialState = {
    isLoginSuccess : null,
}

export default (prevState = initialState,action) => {
switch(action.type) {
    case LOGIN:{
        return {
            ...prevState
        }
    }
    case LOGIN_SUCCESS:{
        return {
            ...prevState,
            isLoginSuccess:action.loginData.loginSuccess,
        }
    }
    case LOGIN_FAILURE:{
        return {
            ...prevState,
            isLoginSuccess:action.loginData.loginSuccess,
        }
    }
    default:{
        return {
            ...initialState
        }
    }
}
}