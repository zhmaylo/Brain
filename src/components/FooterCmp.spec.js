
import React from 'react';
import renderer from 'react-test-renderer';
import { FooterСmp } from './FooterCmp'

const callback = () => {
    console.log("Test headerCmp - callback test  ");
    // expect(data).toMatch('Test Ok');
    return;
};

test('renders correctly', () => {
    
    const tree = renderer.create(
        FooterСmp (25, callback))
        .toJSON();
    expect(tree).toMatchSnapshot();
});



// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test