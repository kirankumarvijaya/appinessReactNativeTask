import { GET_EMPLOYEELIST,GET_EMPLOYEELIST_SUCCESS } from './actionTypes';

const initialState = {
    employeeList:[]
}

export default (prevState = initialState,action) => {
switch(action.type){
    case GET_EMPLOYEELIST:{
        return {
            ...prevState
        }
    }
    case GET_EMPLOYEELIST_SUCCESS:{
        return {
            ...prevState,
            employeeList:action.employeeList
        }
    }
    default:{
        return {
            ...initialState
        }
    }
}
}