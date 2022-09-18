import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home, Profile, Explore} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={navigationStrings.HOME}>
        <Tab.Screen
          options={{
            title: 'My Home',
            tabBarIcon: ({size, color}) => (
              <IconAntDesign name={'home'} color={color} size={size} />
            ),
          }}
          name={navigationStrings.HOME}
          component={Home}
        />
        <Tab.Screen
          name={navigationStrings.PROFILE}
          component={Profile}
          options={{
            tabBarIcon: ({size, color}) => (
              <IconAntDesign name={'user'} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={navigationStrings.EXPLORE}
          component={Explore}
          options={{
            tabBarIcon: ({size, color}) => (
              <IconAntDesign name={'search1'} color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
