import React from 'react';
import {View, Text, Button} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import styles from '../Home/styles';

const Profile = ({navigation}) => {
  const goToScreen = () => {
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button onPress={goToScreen} title="Go Back" />
    </View>
  );
};

export default Profile;
