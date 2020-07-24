
import renderer from 'react-test-renderer';
import { ViewListProdCmp } from './ViewListProdCmp';
import {PRODUCTS_FROM_FILE} from './../constants/productsJSON';

console.log(PRODUCTS_FROM_FILE[0].result.list[0]);
let productsList = PRODUCTS_FROM_FILE[0].result.list;
// let productsList = 122;


const callback = () => {
    console.log("Test - callback test  ");
    // expect(data).toMatch('Test Ok');
    return;
};

test('renders correctly', () => {
    
    const tree = renderer.create(
        
        ViewListProdCmp ({productList=productsList, numCollumns = 1, currSizeList = 20, dispatch : callback}))
        // ViewListProdCmp ({productsList, 1}))
        .toJSON();
    expect(tree).toMatchSnapshot();
});

   


// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test