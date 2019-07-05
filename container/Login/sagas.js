import {LOGIN} from './actionTypes';
import {takeLatest,put} from 'redux-saga/effects';
import * as loginData from '../../JSON/login.json';
import {loginMethodSuccess,loginMethodFailure} from './actionCreator';

function* loginSaga(action){
    let data = yield loginData;
    let { username, password } = action.dataload;
    if ((data.username === username)&&(data.password === password)) {
        console.log('Coming here @positive')
        yield put(loginMethodSuccess({ loginSuccess: true }))
    }
    else {
        console.log('Coming here @negative')
        yield put(loginMethodFailure({ loginSuccess: false }))
    }
}



export function* loginWatchers(){
    yield takeLatest(LOGIN,loginSaga);
}
