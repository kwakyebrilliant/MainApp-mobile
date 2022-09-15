import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home, Profile, Explore} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={navigationStrings.HOME}>
        <Tab.Screen
          options={{title: 'My Home'}}
          name={navigationStrings.HOME}
          component={Home}
        />
        <Tab.Screen name={navigationStrings.PROFILE} component={Profile} />
        <Tab.Screen name={navigationStrings.EXPLORE} component={Explore} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
