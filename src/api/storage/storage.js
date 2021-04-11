import asyncStorage from '@react-native-async-storage/async-storage';

// Storing object value
export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await asyncStorage.setItem(key, jsonValue)
    return true;
  } catch (e) {
    console.log("🚀 ~ file: storage.js ~ line 9 ~ storeData ~ e", e);
    // saving error
  }
}

// Reading object value
export const getData = async (key) => {
  try {
    const jsonValue = await asyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("🚀 ~ file: storage.js ~ line 20 ~ getData ~ e", e);
    // error reading value
  }
}
