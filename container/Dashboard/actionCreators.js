import { GET_EMPLOYEELIST, GET_EMPLOYEELIST_SUCCESS } from './actionTypes';

export const getEmployeesListMethod = () => ({
    type: GET_EMPLOYEELIST
})

export const getEmployeesListFromSaga = (employeeList) => {
        return {
            type: GET_EMPLOYEELIST_SUCCESS,
            employeeList
        }
    }
