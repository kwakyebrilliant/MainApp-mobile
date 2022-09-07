import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

  const App = () => {
  return (
    <View style={styles.body}>
      <Text>Programming with Brilliant</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
