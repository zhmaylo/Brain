
import { getProgBar } from './syncProgBar';

test('getProgBar(curVol, maxVol) - return statistics string =>', () => { 
    let outData = getProgBar(3000, 12567);
    expect(outData).toBe('3000/12567 | 24%');
});
