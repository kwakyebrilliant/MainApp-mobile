import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Profile = ({navigation, route}) => {
  const {title} = route.params;
  console.log('routes', title);
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
