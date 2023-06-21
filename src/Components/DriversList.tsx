import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import DriverItem from './DriverItem';
import { Driver } from '../utils/types';

export default function DriverList({drivers, navigation}: Driver[] | any) {
  return (
    <View style={styles.container}>
      {drivers && drivers.length > 0
        ? <FlatList data={drivers} keyExtractor={item => item.driver_phone}
            renderItem={({item}) => <DriverItem driver={item} navigation={navigation}/>} />
        : <Text style={styles.text}>Список транспорта пуст</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center'
  }
});