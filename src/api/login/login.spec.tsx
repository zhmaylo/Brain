import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { LOGIN, LOGIN_ERROR, PASSWORD, PASS_MD5 } from '../../constants/actionConst';
import { LOGIN_ADMIN, LOGIN_DEFAULT, PASS_ADMIN, PASS_MD5_DEFAULT } from '../../constants/authorizConst';
import { getValueStore, setAutoriz, setValueStore, } from './login';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('../sid/sid');

let key = 'keyTest';
let valueCustom = 'custom';


let dataFromDispatch: any;
const dispatch = (data: any) => {
    dataFromDispatch = data;
    return dataFromDispatch;
}

describe('setAutoriz test group', () => {

    test('setAutoriz - branch testing (if dispatchType == LOGIN)', async () => {
        setAutoriz(dispatch, LOGIN, 'login1');
        expect(dataFromDispatch.type).toBe(LOGIN);
        expect(dataFromDispatch.payload).toBe('login1');
    });

    test('setAutoriz - branch testing ( if dispatchType == PASSWORD)', async () => {
        setAutoriz(dispatch, PASSWORD, 'pass1');
        expect(dataFromDispatch.type).toBe(PASS_MD5);
        console.log("🚀 ~ file: login.spec.tsx ~ line 27 ~ test ~ dataFromDispatch.payload", dataFromDispatch.payload);
        expect(dataFromDispatch.payload).toBe('a722c63db8ec8625af6cf71cb8c2d939');
    });
});
describe('adminEnter test group', () => {

    test('adminEnter - branch testing (if dispatchType == LOGIN)', async () => {
        setAutoriz(dispatch, LOGIN, LOGIN_ADMIN);
        expect(dataFromDispatch.type).toBe(LOGIN);
        expect(dataFromDispatch.payload).toBe(LOGIN_DEFAULT);
    });

    test('adminEnter - branch testing ( if dispatchType == PASSWORD)', async () => {
        setAutoriz(dispatch, PASSWORD, PASS_ADMIN);
        expect(dataFromDispatch.type).toBe(PASS_MD5);
        expect(dataFromDispatch.payload).toBe(PASS_MD5_DEFAULT);
    });
});

describe('checkSID test group', () => {
    test('checkSID - branch testing ( if sid === undefined)', async () => {
        setAutoriz(dispatch, LOGIN_ERROR, 'sid == undefined').then((outdata) => {
            expect(outdata).toBe(false);
        });
        setAutoriz(dispatch, LOGIN_ERROR, 'sid != undefined').then((outdata) => {
            expect(outdata).toBe(true);
        });
    });
});


describe('getValueStore test group', () => {
    test('getValueStore - return valueCustom of storage', async () => {
        let outdata = await setValueStore(key, valueCustom);
        let data = await getValueStore(key);
        expect(outdata).toBe(true);
        expect(data).toBe(valueCustom);
    });
    test('getValueStore - testing receiving ', async () => {
        let outdata = await getValueStore('qwe');
        expect(outdata).toBe('');

    });
});

describe('setValueStore test group', () => {
    test('setValueStore - ApiKey from storage. Return "true" if successful stored.', async () => {
        let outdata = await setValueStore(key, valueCustom);
        expect(outdata).toBe(true);
    });
});