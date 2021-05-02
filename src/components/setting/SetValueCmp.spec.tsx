import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
import { SetValueCmp } from './SetValueCmp';
import renderer from 'react-test-renderer';
// import { useState } from 'react';

jest.mock('../../api/setting/use_State');
test('renders correctly', () => {

    let title: any = 'test title';
    let keyStore: any = 'key';
    let valueDef: any = 'valueDef';
    const onChange = () => { };

    const tree = renderer.create(
        SetValueCmp({ title, keyStore, valueDef, onChange })).toJSON();

        expect(tree).toMatchSnapshot();
});
