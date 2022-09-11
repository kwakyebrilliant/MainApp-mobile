import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Profile} from '../Screens';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Profile" component={Home} />
        <Stack.Screen name="Home" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
