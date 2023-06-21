import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Driver } from '../utils/types';

export default function DriverItem({driver, navigation}: Driver | any) {
  const nav = () => navigation.navigate('Данные ТС', {driver});
  const color = (ts_category: string): string => {
    switch (ts_category) {
      case "Грузовой": return '#228B22';
      case "Пассажирский": return '#FFA500';
      default: return '#cd7f32';
    }
  }
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={nav} style={[styles.div, {backgroundColor: color(driver.ts_category)}]}>
      <Text style={[styles.text, {fontSize: 18}]} >{driver.ts_name}</Text>
      <Text style={styles.text} >{driver.driver_name}</Text>
      <Text style={styles.text}>{driver.ts_category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 5,
    color: '#fff'
  },
  div: {
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
    marginVertical: 5,
    marginHorizontal: 10
  }
});