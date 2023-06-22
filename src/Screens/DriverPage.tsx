import React from 'react';
import { StyleSheet, Text, View, Button, Linking, Alert } from 'react-native';
import Map from '../Components/Map';
import { Driver } from '../utils/types';

export default function DriverPage({route}: any) {
  const driver: Driver = route.params.driver;
  const driver_phone = driver.driver_phone;
  
  const handleCall = () => Linking.openURL(`tel:${driver_phone}`);
  const handleWrite = () => {
    Linking.openURL(`whatsapp://send?phone=${driver_phone}&text=${'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе'}`)
    .catch(() => Alert.alert('У вас не установлен WhatsApp'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.text}>Имя водителя: {driver.driver_name}</Text>
        <Text style={styles.text}>Категория ТС: {driver.ts_category}</Text>
        <Text style={styles.text}>Телефон водителя: {driver_phone}</Text>
        <View style={styles.button_box}>
          <Button title='Позвонить' onPress={handleCall} />
          <Button title='Написать в WhatsApp' onPress={handleWrite} />
        </View>
      </View>
      <Map driver={driver} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    gap: 10
  },
  text: {
    marginVertical: 5,
  },
  button_box: {
    flexDirection: "row",
    width: '100%',
    gap: 20,
  },
  info: {
    width: '100%',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  }
});