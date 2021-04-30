import { getValueStore, setValueStore } from "./setting";
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

let key='keyTest';
let value='normValue';
let valueDef='defValue';

describe('', () => {
    test('getValueStore - return value from storage', () => {
        let outdata = getValueStore(key, valueDef);
        expect(outdata).toBe(20);
    });

    test('setValueStore - ApiKey from storage. Return "true" if successful stored.', () => {
        let outdata = setValueStore(key, value);
        expect(outdata).toBe(15);
    });
});