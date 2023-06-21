import React from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function SelectView({title, handleShowMap}: any) {
  const route_title: string = title;
  return (
    <View style={styles.filter}>
      <Text style={styles.text}>Вид:</Text>
      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Button title={route_title} onPress={handleShowMap}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 5
  },
  button: {
    margin: 5
  },
  filter: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
  }
});