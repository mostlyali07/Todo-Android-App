import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
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
          marginBottom: 30,
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

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          position: 'absolute',
          bottom: 60,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            paddingVertical: 15,
            paddingHorizontal: 15,
            backgroundColor: '#fff',
            borderRadius: 60,
            borderColor: '#c0c0c0',
            borderWidth: 1,
            width: 250,
          }}
          placeholder={'Write a task'}
        />
        <TouchableOpacity>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: '#fff',
              borderRadius: 60,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#c0c0c0',
              borderWidth: 1,
            }}>
            <Text style={{}}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
