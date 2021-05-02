import asyncStorage from '@react-native-async-storage/async-storage';

// Storing object value
export const storeData = async (key: any, value: any) => {
  try {
    const jsonValue = JSON.stringify(value)
    await asyncStorage.setItem(key, jsonValue)
    // console.log('🚀 ~ file: storage.js ~ line 13 ~ storeData ~ true', true);

    return true;
  } catch (e) {
    // saving error
    // console.error('Error store', e);
  }
};

// Reading object value
export const getData = async (key: any) => {
  try {
    const jsonValue = await asyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
