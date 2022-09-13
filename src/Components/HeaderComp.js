import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HeaderComp = ({goBack = () => {}, text, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 42,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>GoBack</Text>
      </TouchableOpacity>
      <Text>{text}</Text>
      <Text />
    </View>
  );
};

export default HeaderComp;
