import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
import { SetValueCmp } from './SetValueCmp';
import renderer from 'react-test-renderer';
// import { useState } from 'react';

jest.mock('../../api/login/use_State');
test('renders correctly', () => {

    let title: any = 'test title';
    let keyStore: any = 'key';
    let valueDef: any = 'valueDef';
    let onChangeValue: any;
    let secure = true;

    const tree = renderer.create(
        SetValueCmp({ title, keyStore, onChangeValue, secure })).toJSON();

        expect(tree).toMatchSnapshot();
});
