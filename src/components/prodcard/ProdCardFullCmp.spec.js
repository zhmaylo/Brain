
import renderer from 'react-test-renderer';
import { PRODUCTS_FROM_FILE } from '../../constants/productsJSON';
import { ProdCardFullCmp } from './ProdCardFullCmp';
// jest.mock('./SwiperBoxCmp/SwiperBoxCmp');
// jest.mock('react-native-gesture-handler');


import 'react-native-gesture-handler/jestSetup';

// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
//   Reanimated.default.call = () => {};

//   return Reanimated;
// });

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// As of react-native@0.64.X file has moved
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');


let item = PRODUCTS_FROM_FILE[0].result.list;

test('renders correctly', () => {
    const navigate = () => {
        return true;
    };
    let navigation = { navigate };
    let props = { navigation };

    const tree = renderer.create(
        ProdCardFullCmp({
            item: item,
            currImages: ['','',''],
            props: props
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