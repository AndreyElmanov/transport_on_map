import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

export default function Settings() {
  const [lang, setLang] = useState('ru');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Язык:</Text>
      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Button title='ru'
          onPress={() => setLang('ru')}
          color={lang === 'ru' ? 'red' : 'grey'} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Button title='en'
          onPress={() => setLang('en')}
          color={lang === 'en' ? 'blue' : 'grey'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    margin: 5,
    alignSelf: 'center'
  },
  button: {
    margin: 5
  }
});