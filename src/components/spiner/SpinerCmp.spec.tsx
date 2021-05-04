
import React from 'react';
import renderer from 'react-test-renderer';
import { SpinerСmp } from './SpinerCmp'

test('renders correctly', () => {
    
    const tree = renderer.create(
        SpinerСmp ())
        .toJSON();
    expect(tree).toMatchSnapshot();
});



