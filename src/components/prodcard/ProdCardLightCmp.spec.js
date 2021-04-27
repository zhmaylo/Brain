
import renderer from 'react-test-renderer';
import { PROD_SCR } from '../../constants/appNavigatorConst';
import { PRODUCTS_FROM_FILE } from '../../constants/productsJSON';
import { ProdCardLightCmp } from './ProdCardLightCmp';


let item = PRODUCTS_FROM_FILE[0].result.list;
let sidAndTime = {
    sid: "m8a0ja0dbelrdbaossblnl4a40",
    timeStamp: 1619522162997
}


test('renders correctly', () => {
    const navigate = () => {
        return true;
    };
    let navigation = { navigate };
    let props = { navigation };

    const tree = renderer.create(


        ProdCardLightCmp({
            item: item,
            props: props,
            dispatch: null,
            sidAndTime: sidAndTime
        })
    )
        .toJSON();
    expect(tree).toMatchSnapshot();
});



// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test