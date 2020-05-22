
import 'jsdom-global/register'; //at the top of file , even  , before importing react

import React from 'react';
import ErrorScr from './errorScr';

import renderer from 'react-test-renderer';
// import * as renderer from 'react-test-renderer';

import mount  from "enzyme";
import { ContextApp } from './../reducers/unionRdc';

// import jsdom from 'jsdom';
// const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

        var jsdom = require('jsdom');
        const { JSDOM } = jsdom;

        const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
        global.document = document;
        global.window = document.defaultView;

// global.document = doc;
// global.window = doc.defaultView;

test('renders correctly', () => {
    const wrapper = mount(
        <ContextApp.Provider 
            value={{
                dispatch: jest.fn(),
                state: {statusResponseRdc: {statusResponse: { firstname: "Alice", message: "Middleman" }}},
                loading: false
            }}>
            <ErrorScr />
        </ContextApp.Provider>);
    expect(wrapper.find("errMes").text().toMatchSnapshot())
});


test('renders correctly', () => {
    const tree = renderer.create(<ErrorScr />).toJSON();
    expect(tree).toMatchSnapshot();
});


// const wrapper = mount(
//     <UserContext.Provide 
//     value={{
//       dispatch: jest.fn(),
//       user: { firstname: "Alice", lastname: "Middleman" }
//       loading: false
//     }}>
//       <Greeting />
//     </UserContext.Provider>);
//   expect(wrapper.find("h1").text()).toEqual("Hello Alice Middleman");
// });

// import { View, Text } from 'react-native';


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