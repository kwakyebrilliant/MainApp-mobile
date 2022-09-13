import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Profile, Explore} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navigationStrings.HOME}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          options={{title: 'My Home'}}
          name={navigationStrings.HOME}
          component={Home}
        />
        <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />
        <Stack.Screen name={navigationStrings.EXPLORE} component={Explore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
