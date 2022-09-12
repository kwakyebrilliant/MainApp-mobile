import React from 'react';
import {View, Text} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

const Profile = ({navigation, route}) => {
  const {title} = route.params;
  console.log('routes', title);
  const goToScreen = () => {
    navigation.navigate(navigationStrings.PROFILE, {title: 'Subscribe'});
  };
  return (
    <View style={styles.container}>
      <Text>This is Profile Screen</Text>
      <Text>{title}</Text>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
