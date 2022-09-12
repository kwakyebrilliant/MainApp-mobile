import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HeaderComp = ({goBack = () => {}, text}) => {
  return (
    <View>
      <TouchableOpacity onPress={goBack}>
        <Text>GoBack</Text>
      </TouchableOpacity>
      <Text>{text}</Text>
    </View>
  );
};

export default HeaderComp;
