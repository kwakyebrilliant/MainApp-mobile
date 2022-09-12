import React from 'react';
import {View, Text, Button} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

const Home = ({navigation}) => {
  const goToScreen = () => {
    navigation.navigate(navigationStrings.PROFILE, {title: 'Subscribe'});
  };
  return (
    <View style={styles.container}>
      <Button onPress={goToScreen} title="Go To Profile" />
    </View>
  );
};

export default Home;
