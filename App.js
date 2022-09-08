import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [name, setName] = useState('Style test');
  const onClickHandler = () => {
    setName('Programming with Brilliant');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Button title="Update state" onPress={onClickHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default App;
