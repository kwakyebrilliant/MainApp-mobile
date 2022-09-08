import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [name, setName] = useState('Brilliant');
  const [session, setSession] = useState({number: 6, title: 'state'});
  const [current, setCurrent] = useState(true);
  const onClickHandler = () => {
    setName('Programming with Brilliant');
    setSession({number: 7, title: 'Style'});
    setCurrent(false);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>
        This session number is {session.number} and about {session.title}
      </Text>
      <Text style={styles.text}>
        {current ? 'current session' : 'next session'}
      </Text>
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
