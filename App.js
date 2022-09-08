import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Linking} from 'react-native';

  const App = () => {
    const [name, setName] = useState('Brilliant');
  return (
    <View style={styles.body}>
      <Text style={styles.text}>My name is {name}</Text>
      <Button title="learn coding" onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=1lg_IXtjles&list=PL8kfZyp--gEXs4YsSLtB3KqDtdOFHMjWZ&index=6')}}></Button>
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
