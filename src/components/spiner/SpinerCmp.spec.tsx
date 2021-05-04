

import renderer from 'react-test-renderer';
import { SPINER_MES_LOAD } from '../../constants/spinerConst';
import { SpinerСmp } from './SpinerCmp'

test('renders correctly', () => {
    
    const tree = renderer.create(
        SpinerСmp ({spiner_mes: SPINER_MES_LOAD}))
        .toJSON();
    expect(tree).toMatchSnapshot();
});



