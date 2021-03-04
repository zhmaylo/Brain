
import {TBrain} from '../dbAPI/provider/tBrain';
let tBrain = new TBrain;

export const clearBrainTbl = () => {
    tBrain.tDeleteAll();
}