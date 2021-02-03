
import renderer from 'react-test-renderer';
import {PRODUCTS_FROM_FILE} from '../../constants/productsJSON';
import { ProdCardFullCmp } from './ProdCardFullCmp';


let item = PRODUCTS_FROM_FILE[0].result.list;

test('renders correctly', () => {
    
    const tree = renderer.create(
        ProdCardFullCmp({
                item : item,
                numCol : 1 }
        ))
        .toJSON();
    expect(tree).toMatchSnapshot();
});

   

// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test