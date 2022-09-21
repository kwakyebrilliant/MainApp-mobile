import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from '../Home/styles';

const Home = () => {
  const images = [
    require('../../../assets/done.png'),
    require('../../../assets/done.png'),
    require('../../../assets/done.png'),
    require('../../../assets/done.png'),
    require('../../../assets/done.png'),
  ];
  return (
    <View style={styles.container}>
      <Text>Home alone</Text>
    </View>
  );
};

export default Home;
