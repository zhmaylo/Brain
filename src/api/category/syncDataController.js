
import {TBrain} from '../dbAPI/provider/tBrain';
let tBrain = new TBrain;

// Brain table clear
export const clearBrainTbl = () => {
    tBrain.tDeleteAll();
}

// Crud log
export const getCrudLog = () => {
    console.log('getCrudLog.tBrain.getCrudLog()', tBrain.getCrudLog())
    return tBrain.getCrudLog();
}