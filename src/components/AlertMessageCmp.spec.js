

import React from 'react';


import renderer from 'react-test-renderer';
// import * as renderer from 'react-test-renderer';

// import { View } from 'react-native';
import { AlertMessageCmp } from './AlertMessageCmp';



test('renders correctly', () => {
    const tree = renderer.create(
            <AlertMessageCmp message="Test message"/>            )
        
        .toJSON();
    expect(tree).toMatchSnapshot();
});





// test('renders correctly', () => {
//     const tree1 = renderer.create(
//             <View>
//                 <Text>App Name</Text>
//             </View>)
//     .toJSON();
//     expect(tree1).toMatchSnapshot();
// });



// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test