import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const Home = (props) => {
  console.log('props available', props);
  return (
    <View style={styles.container}>
      <Button onPress={() => alert('Pressed')} title="Go To Profile" />
    </View>
  );
};

export default Home;
