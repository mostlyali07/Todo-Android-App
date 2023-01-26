import {View, Text} from 'react-native';
import React from 'react';
import Task from './Components/Task';

export default function App() {
  return (
    <View style={{backgroundColor: '#e4e6e9', padding: 20}}>
      <Text
        style={{
          color: '#000',
          fontWeight: 'bold',
          fontSize: 24,
          marginTop: 70,
          marginBottom: 30
        }}>
        Today's tasks
      </Text>
      <View>
        <Task text="1" />
        <Task text="2" />
        <Task text="3" />
        <Task text="4" />
        <Task text="5" />
      </View>
    </View>
  );
}
