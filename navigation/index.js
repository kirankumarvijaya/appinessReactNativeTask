import {createStackNavigator,createAppContainer} from 'react-navigation';
import LoginPage from '../container/Login';
import Dashboard from '../container/Dashboard';
import React from 'react';
import {Image} from 'react-native'

const AppNavigation = createStackNavigator({
    LoginPage:{
        screen:LoginPage,
        navigationOptions:{
            header:null
        }
    },
    Dashboard:{
        screen:Dashboard,
        navigationOptions:{
            title:'DashBoard',
            headerStyle: {
                backgroundColor: 'black',
              },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign:'center'
            },
            headerRight:(
                <Image source={require('../assets/appinesslogo.png')}></Image>
            )
        }
    }
},
{
    initialRouteName:'LoginPage'
});

export default createAppContainer(AppNavigation);