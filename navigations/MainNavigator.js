import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen'
import DetailScreen from '../Screens/DetailScreen';

const MainStack = createStackNavigator();

const MainNavigator = () => {
    return(
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name="Home" component={HomeScreen}/>
                <MainStack.Screen name="Detail" component={DetailScreen}/>
            </MainStack.Navigator>
        </NavigationContainer>

    )
}

export default MainNavigator;
