
import renderer from 'react-test-renderer';
import { SetValueCmp } from './SetValueCmp';


test('renders correctly', () => {
   let title =  'test title';
    const tree = renderer.create(
        SetValueCmp ({title}))
        .toJSON();
    expect(tree).toMatchSnapshot();
});
