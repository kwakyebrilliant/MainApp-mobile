import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
    <View style={styles.view1}>
      <Text style={styles.text}>1</Text>
    </View>
    <View style={styles.view2}>
      <Text style={styles.text}>2</Text>
    </View>
    <View style={styles.view3}>
      <Text style={styles.text}>3</Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
    borderColor: '#ff00ff',
    borderRadius: 10,
  },
  view1: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view2: {
    flex: 1,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
});

export default App;
