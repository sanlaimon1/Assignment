import React from 'react';
import { View, Text } from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
//pages
import LoginScreen from '@pages/Auth/Login/Login';
import RegisterScreen from '@pages/Auth/Register/Register';
import PasswordScreen from '@pages/Auth/Password/Password';
import dashboardScreen from '@pages/Dashboard/Dashboard';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Password" component={PasswordScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
