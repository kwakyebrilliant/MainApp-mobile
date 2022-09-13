import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

const Profile = ({navigation, route}) => {
  const {title} = route.params;
  console.log('routes', title);
  const goToScreen = () => {
    navigation.navigate(navigationStrings.EXPLORE, {title: 'Subscribe'});
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComp goBack={() => navigation.goBack} text="Profile Screen" />
        <Text>This is params data: {title}</Text>
        <Text>Profile</Text>
        <Button onPress={goToScreen} title="Go To Explore" />
        <Button onPress={() => navigation.goBack()} title="Go Back" />
      </SafeAreaView>
    </View>
  );
};

export default Profile;
