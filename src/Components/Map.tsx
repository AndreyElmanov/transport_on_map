import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Coordinate, Driver } from '../utils/types';
const pas = require('../../assets/pas.png');
const spec = require('../../assets/spec.png');
const gruz = require('../../assets/gruz.png');

export default function Map({drivers, navigation, driver}: Driver[] | any | Driver) {
  const handleImage = (ts_category: string): ImageData => {
    switch (ts_category) {
      case "Грузовой": return gruz;
      case "Пассажирский": return pas;
      default: return spec;
    }
  };
  const route_drivers: Driver[] = drivers;
  const route_driver: Driver = driver;
  const pos: Coordinate = {
    latitude: +route_driver?.position?.latitude,
    longitude: +route_driver?.position?.longitude,
  };
  const route_image = handleImage(route_driver?.ts_category);

  return (
    <View style={styles.map}>
      <MapView style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        zoomControlEnabled
        initialRegion={{
          latitude: route_driver ? pos.latitude : 55.753915021184504,
          longitude: route_driver ? pos.longitude : 37.620519521019034,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} >
        {route_drivers
          ? route_drivers.map((driver: Driver) => {
              const nav = () => navigation.navigate('Данные ТС', {driver});
              const pos: Coordinate = {
                latitude: +driver.position.latitude,
                longitude: +driver.position.longitude,
              };
              const image = handleImage(driver.ts_category);
              return <Marker
                        key={driver.driver_phone}
                        coordinate={pos}
                        title={driver.driver_name}
                        description={driver.ts_category}
                        onPress={nav}
                        image={image} /> })
          : <Marker
              key={route_driver.driver_phone}
              coordinate={pos}
              title={route_driver.driver_name}
              description={route_driver.ts_category}
              image={route_image} />}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderColor: '#000',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 3
  }
});