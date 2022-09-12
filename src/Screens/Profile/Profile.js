import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Profile = (props) => {
  console.log('props', props);
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
