/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, ImageBackground} from 'react-native';
import styles from '../Home/styles';

const Home = () => {
  const images = [
    require('../../../assets/hunger.jpeg'),
    require('../../../assets/hunger.jpeg'),
    require('../../../assets/home.jpeg'),
    require('../../../assets/hunger.jpeg'),
    require('../../../assets/hunger.jpeg'),
    require('../../../assets/hunger.jpeg'),
    require('../../../assets/hunger.jpeg'),
    require('../../../assets/hunger.jpeg'),
  ];

  const _renderItem = ({item, index}) => (
    <ImageBackground
      source={item}
      style={{
        width: 160,
        height: 140,
        marginHorizontal: 10,
        marginVertical: 10,
      }}
      resizeMode="cover">
      <Text>Hi</Text>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <View style={{flex: 1, margin: 10}}>
        <FlatList
          columnWrapperStyle={styles.flatlist}
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
