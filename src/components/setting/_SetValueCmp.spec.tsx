import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
import renderer from 'react-test-renderer';
import { SetValueCmp } from './SetValueCmp';


test('renders correctly', () => {

    let title: any = 'test title';
    let keyStore: any = 'key';
    let valueDef: any = 'valueDef';
    const onChange = () => { };
    
    const tree = renderer.create(
        SetValueCmp({ title, keyStore, valueDef, onChange })).toJSON();

    expect(tree).toMatchSnapshot();

});
