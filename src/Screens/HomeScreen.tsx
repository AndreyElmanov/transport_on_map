import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DriverList from '../Components/DriversList';
import Map from '../Components/Map';
import { isElementInArray } from '../utils/helpers';
import api from '../utils/api';
import FilterCategory from '../Components/FilterCategory';
import SelectView from '../Components/SelectView';
import { Driver } from '../utils/types';

export default function HomeScreen({navigation}: any) {
  const [showMap, setShowMap] = useState(false);
  const [filterCategorys, setFilterCategorys] = useState([]);

  const drivers: Driver[] = api.getData();
  const button_text: string = showMap ? 'Список' : 'На карте';
  const filtered_drivers: Driver[] = [];
  filterCategorys.forEach((el: string) =>
    drivers.forEach((driver: Driver) =>
      driver.ts_category === el && filtered_drivers.push(driver)));
  const filter_drivers = filterCategorys.length === 0 ? drivers : filtered_drivers;

  const handleShowMap = () => setShowMap(!showMap);
  const handleAddOrDeleteFilterCategory = (element: string | any) => {
    if (isElementInArray(filterCategorys, element)) {
      const new_array = filterCategorys.filter(el => el !== element);
      setFilterCategorys(new_array);
    } else {
      const new_array = filterCategorys.concat(element);
      setFilterCategorys(new_array);
    }
  };
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FilterCategory handleAddOrDeleteFilterCategory={handleAddOrDeleteFilterCategory} filterCategorys={filterCategorys} />
      <SelectView title={button_text} handleShowMap={handleShowMap} />
      <View style={styles.map}>
        {showMap
          ? <Map drivers={filter_drivers} navigation={navigation} />
          : <DriverList drivers={filter_drivers} navigation={navigation} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  map: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
});