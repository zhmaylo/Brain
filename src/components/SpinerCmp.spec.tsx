
import React from 'react';
import renderer from 'react-test-renderer';
import { SpinerСmp } from './SpinerCmp'

test('renders correctly', () => {
    
    const tree = renderer.create(
        SpinerСmp (25, 200))
        .toJSON();
    expect(tree).toMatchSnapshot();
});



// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test