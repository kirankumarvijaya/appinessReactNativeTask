import {createStackNavigator,createAppContainer} from 'react-navigation';
import LoginPage from '../container/Login';
import Dashboard from '../container/Dashboard';

const AppNavigation = createStackNavigator({
    LoginPage:{
        screen:LoginPage,
        navigationOptions:{
            header:null
        }
    },
    Dashboard:{
        screen:Dashboard
    }
},
{
    initialRouteName:'LoginPage'
});

export default createAppContainer(AppNavigation);