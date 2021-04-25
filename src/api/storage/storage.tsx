import asyncStorage from '@react-native-async-storage/async-storage';

// Storing object value
export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await asyncStorage.setItem(key, jsonValue)
    console.log('🚀 ~ file: storage.js ~ line 13 ~ storeData ~ true', true);
    
    return true;
  } catch (e) {
    // saving error
  }
}

// Reading object value
export const getData = async (key) => {
  try {
    const jsonValue = await asyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
}
