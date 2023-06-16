import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = value => {
  return AsyncStorage.getItem(value);
};
export const multiGet = value => {
  return AsyncStorage.multiGet(value);
};
export const storeData = (value, data) => {
  return AsyncStorage.setItem(value, JSON.stringify(data));
};
export const deleteData = value => {
  return AsyncStorage.removeItem(value);
};
