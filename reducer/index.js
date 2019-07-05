import loginReducer from '../container/Login/reducer';
import DashboardReducer from '../container/Dashboard/reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    loginReducer,
    DashboardReducer
});
