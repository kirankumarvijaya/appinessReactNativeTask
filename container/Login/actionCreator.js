import { LOGIN,LOGIN_SUCCESS,LOGIN_FAILURE } from './actionTypes';

export const loginMethod = (dataload) => ({
    type:LOGIN,
    dataload
});

export const loginMethodSuccess = (loginData) => ({
    type:LOGIN_SUCCESS,
    loginData
});

export const loginMethodFailure = (loginData) => ({
    type : LOGIN_FAILURE,
    loginData
})