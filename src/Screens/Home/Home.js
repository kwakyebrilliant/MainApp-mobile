/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from '../Home/styles';

const Home = () => {
  const images = [
    require('../../../assets/hunger.jpeg'),
    require('../../../assets/hunger.jpeg'),
    require('../../../assets/hunger.jpeg'),
    require('../../../assets/hunger.jpeg'),
    require('../../../assets/hunger.jpeg'),
    require('../../../assets/hunger.jpeg'),
    require('../../../assets/hunger.jpeg'),
    require('../../../assets/hunger.jpeg'),
  ];

  const _renderItem = ({item, index}) => (
    <Image
      source={item}
      style={{
        width: 160,
        height: 160,
        marginHorizontal: 10,
      }}
      resizeMode="contain"
    />
  );

  return (
    <View style={styles.container}>
      <View style={{flex: 1, margin: 10}}>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={(_, index) => index.toString()}
          data={images}
          numColumns={2}
          renderItem={_renderItem}
        />
      </View>
    </View>
  );
};

export default Home;
