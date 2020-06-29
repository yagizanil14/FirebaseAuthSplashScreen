// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SignUp,LoginPage, ListPage, SplashScreen} from './pages'

const Stack = createStackNavigator();

function rooter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen} />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage} />
      <Stack.Screen 
        name="ListPag" 
        component={ListPage} />
        <Stack.Screen 
        name="SignUp" 
        component={SignUp} />
       
      </Stack.Navigator>  
    </NavigationContainer>
  );
}

export default rooter;