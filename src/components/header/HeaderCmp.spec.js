
import React from './node_modules/react';
import renderer from './node_modules/react-test-renderer';
import { HeaderCmp } from './HeaderCmp';


const callback = () => {
    console.log("Test headerCmp - callback test  ");
    // expect(data).toMatch('Test Ok');
    return;
};

test('renders correctly', () => {
    
    const tree = renderer.create(
        HeaderCmp(callback)           )
        .toJSON();
    expect(tree).toMatchSnapshot();
});




// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test