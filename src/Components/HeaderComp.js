import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HeaderComp = ({goBack = () => { }, text}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={goBack}>
        <Text>GoBack</Text>
      </TouchableOpacity>
      <Text>{text}</Text>
      <Text />
    </View>
  );
};

export default HeaderComp;
