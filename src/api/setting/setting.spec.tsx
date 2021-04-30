import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
import { getValueStore, setValueStore } from "./setting";

let key = 'keyTest';
let valueCustom = 'custom';
let valueDef = 'default';

describe('', () => {
    test('getValueStore - return valueDef of storage', async () => {
        let outdata = await getValueStore(key, valueDef);
        expect(outdata).toBe(valueDef);
    });
    test('getValueStore - return valueCustom of storage', async () => {
        let outdata = await setValueStore(key, valueCustom);
        let data = await getValueStore(key, valueDef);
        expect(outdata).toBe(true);
        expect(data).toBe(valueCustom);
    });

    test('setValueStore - ApiKey from storage. Return "true" if successful stored.', async () => {
        let outdata = await setValueStore(key, valueCustom);
        expect(outdata).toBe(true);
    });
});