// jest.mock - mockAsyncStorage
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
//
import renderer from 'react-test-renderer';
import { ListProdCmp } from './ListProdCmp';
import {PRODUCTS_FROM_FILE} from '../../constants/productsJSON';


let productsList = PRODUCTS_FROM_FILE[0].result.list;
console.log("ListProdCmp.spec => productsList", PRODUCTS_FROM_FILE[0].result.list[0]);

const callback = () => {
    console.log("Test - callback test  ");
    // expect(data).toMatch('Test Ok');
    return;
};
let sidAndTime = {
    sid: "m8a0ja0dbelrdbaossblnl4a40",
    timeStamp: 1619522162997
};
const navigate = () => {
    return true;
};
let navigation = { navigate };
let props = { navigation };

test('renders correctly', () => {
    
    const tree = renderer.create(
        ListProdCmp({
                productList : productsList,
                numCollumns : 1,
                currSizeList : 20,
                dispatch : callback,
                sidAndTime: sidAndTime,
                props:props
             }
        ))
        .toJSON();
    expect(tree).toMatchSnapshot();
});

   


// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test