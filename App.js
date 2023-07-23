import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import Task from './Components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#e4e6e9', padding: 20}}>
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
        {taskItems.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => completTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          );
        })}
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
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleTask()}>
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
            <Text
              style={{
                color: '#000',
              }}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
