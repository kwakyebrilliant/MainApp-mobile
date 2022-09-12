import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Profile = (props) => {
  const {navigation, route} = props;
  console.log('routes', route);
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
