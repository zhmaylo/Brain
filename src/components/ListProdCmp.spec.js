import React from 'react';
import renderer from 'react-test-renderer';
import { ListProdCmp } from './ListProdCmp';
import {PRODUCTS_FROM_FILE} from '../constants/productsJSON';


let productsList = PRODUCTS_FROM_FILE[0].result.list;
console.log("ListProdCmp.spec => productsList", PRODUCTS_FROM_FILE[0].result.list[0]);

const callback = () => {
    console.log("Test - callback test  ");
    // expect(data).toMatch('Test Ok');
    return;
};

test('renders correctly', () => {
    
    const tree = renderer.create(
        ListProdCmp({
                productList : productsList,
                numCollumns : 1,
                currSizeList : 20,
                dispatch : callback }
        ))
        // ListProdCmp ({productsList, 1, 20, callback}))
        // ListProdCmp (productsList, 1, 20, callback))
        // ListProdCmp ({productsList, 1}))
        .toJSON();
    expect(tree).toMatchSnapshot();
});

   


// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test