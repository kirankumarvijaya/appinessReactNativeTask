import {createStackNavigator,createAppContainer} from 'react-navigation';
import LoginPage from '../container/Login';

const AppNavigation = createStackNavigator({
    LoginPage:{
        screen:LoginPage,
        navigationOptions:{
            header:null
        }
    }
},
{
    initialRouteName:'LoginPage'
});

export default createAppContainer(AppNavigation);