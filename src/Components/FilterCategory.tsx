import React from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { isElementInArray } from '../utils/helpers';

export default function FilterCategory({handleAddOrDeleteFilterCategory, filterCategorys}: any | string[]) {
  return (
    <View style={styles.filter}>
      <Text style={styles.text}>Показать только:</Text>
      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Button title='Грузовой'
          onPress={() => handleAddOrDeleteFilterCategory('Грузовой')}
          color={isElementInArray(filterCategorys, 'Грузовой') ? '#228B22' : 'grey'} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Button title='Пассажирский'
          onPress={() => handleAddOrDeleteFilterCategory('Пассажирский')}
          color={isElementInArray(filterCategorys, 'Пассажирский') ? '#FFA500' : 'grey'} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.button}>
        <Button title='Спецтранспорт'
          onPress={() => handleAddOrDeleteFilterCategory('Спецтранспорт')}
          color={isElementInArray(filterCategorys, 'Спецтранспорт') ? '#cd7f32' : 'grey'} />
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