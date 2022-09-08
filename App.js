import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Linking} from 'react-native';

  const App = () => {
    const [name, setName] = useState('Brilliant');
    const [session, setSession] = useState({number: 6, title: 'state'});
    const onClickHandler = () => {
      setName('Programming with Brilliant')
    }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>This session number is {session.number} and about {session.title}</Text>
      <Button title="Update state" onPress={onClickHandler}></Button>
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
