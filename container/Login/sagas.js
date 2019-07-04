import {LOGIN} from './actionTypes';
import {takeEvery,put} from 'redux-saga/effects';
import * as loginData from '../../JSON/login.json';
import {loginMethodSuccess,loginMethodFailure} from './actionCreator';

function* loginSaga(action){
    let data = yield loginData;
    let { username, password } = action.data;
    if ((data.username === username)&&(data.password === password)) {
        yield put(loginMethodSuccess({ loginSuccess: 'true' }))
    }
    else {
        yield put(loginMethodFailure({ loginSuccess: 'false' }))
    }
}



export function* loginWatchers(){
    yield takeEvery(loginSaga,LOGIN);
}
