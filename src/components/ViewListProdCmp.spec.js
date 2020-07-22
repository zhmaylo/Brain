
import renderer from 'react-test-renderer';
import { ViewListProd } from './ViewListProdCmp';

test('renders correctly', () => {
    
    const tree = renderer.create(
        ViewListProd (25, 200))
        .toJSON();
    expect(tree).toMatchSnapshot();
});



// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test