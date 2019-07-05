import {GET_EMPLOYEELIST} from './actionTypes';
import * as EmployeeList from '../../JSON/employeeList.json';
import {takeLatest,put} from 'redux-saga/effects';
import {getEmployeesListFromSaga} from './actionCreators';

function* getEmployeeList(){
    let employeeList = yield EmployeeList;
    yield put(getEmployeesListFromSaga(employeeList));
    // since it is from a mockjson we are not dealing with exception handling or else we ll writing this in a try
    // and catch block.
}


export function* employeeListWatcher(){
    yield takeLatest(GET_EMPLOYEELIST,getEmployeeList)
}