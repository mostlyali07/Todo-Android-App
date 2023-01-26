import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Task(props) {
  return (
    <View
      style={{
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 20,
      }}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
        <View
          style={{
            backgroundColor: '#55bcf6',
            height: 24,
            width: 24,
            opacity: 0.4,
          }}></View>
      </View>
      <Text>{props.text}</Text>
      <View
        style={{
          height: 12,
          width: 12,
          borderColor: '#55bcf6',
          borderWidth: 2,
          borderRadius: 5,
        }}></View>
    </View>
  );
}
