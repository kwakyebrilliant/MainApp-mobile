import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HeaderComp = ({goBack}) => {
  return (
    <View>
      <TouchableOpacity>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Text>{}</Text>
    </View>
  );
};

export default HeaderComp;
