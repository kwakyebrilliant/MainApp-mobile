import React from 'react';
import {View, Text, Button} from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

const Home = ({navigation}) => {
  const goToScreen = () => {
    navigation.navigate(navigationStrings.PROFILE, {title: 'Subscribe'});
  };
  return (
    <View style={styles.container}>
      <HeaderComp />
      <Text>This is Home Screen</Text>
      <Button onPress={goToScreen} title="Go To Profile" />
    </View>
  );
};

export default Home;
