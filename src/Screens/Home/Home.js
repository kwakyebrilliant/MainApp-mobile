import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

const Home = ({navigation}) => {
  const goToScreen = () => {
    navigation.navigate(navigationStrings.PROFILE, {title: 'Subscribe'});
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComp goBack={() => navigation.goBack} />
        <Text>This is Home Screen</Text>
        <Button onPress={goToScreen} title="Go To Profile" />
      </SafeAreaView>
    </View>
  );
};

export default Home;
