import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from '../Home/styles';

const Home = () => {
  const images = [
    require('../../../assets/done.png'),
    require('../../../assets/done.png'),
    require('../../../assets/done.png'),
    require('../../../assets/done.png'),
    require('../../../assets/done.png'),
  ];

  const _renderItem = ({item, index}) => (
    <Image
      source={item}
      style={{
        width: '50%',
        height: 200,
      }}
      resizeMode="cover"
    />
  );

  return (
    <View style={styles.container}>
      <Text>Home alone</Text>
    </View>
  );
};

export default Home;
