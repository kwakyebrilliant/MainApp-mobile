import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const Home = ({navigation}) => {
  console.log('props available', navigation);
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Go To Profile"
      />
    </View>
  );
};

export default Home;
