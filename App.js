import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

  const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Programming with Brilliant</Text>
      <Button title="learn coding"></Button>
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
