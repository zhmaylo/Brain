import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
import { getData, storeData } from "./storage";

test('"storeData"  => ', async () => {
    let outdate = await storeData('keyTest', 1);
    // console.log("Test getCategoryList. dipatch data", data);
    expect(outdate).toBe(true);
});
test('"getData"  => ', async () => {
    let outdate = await getData('keyTest');
    // console.log("Test getCategoryList. dipatch data", data);
    expect(outdate).toBe(1);
});