import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HeaderComp = ({goBack = () => {}, text}) => {
  return (
    <View>
      <TouchableOpacity onPress={goBack}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Text>{}</Text>
    </View>
  );
};

export default HeaderComp;
