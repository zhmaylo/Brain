import AsyncStorage from '@react-native-async-storage/async-storage';

// Storing object value
export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    console.log(value);
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    // saving error
  }
}

// Reading object value
export const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
  