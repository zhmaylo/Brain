
import { v1 as timeStamp } from 'uuid';
import { TBrain } from '../dbAPI/provider/tBrain';
import { clone } from '../clone';
import { logItemAdd } from './syncDataLog';
import { syncBrainVsOrig } from './syncBrainVsOrig';
import { TBrain } from './../dbAPI/provider/tBrain';
const tBrain = new TBrain;

// Brain table clear
export async function clearBrainTblContr() {
    tBrain.tDeleteAll();
    // console.log('clearBrainTbl finished',)
}

// getCrudLog - Crud log
// currCrudLog - current array og CRUD log
export const getCrudLogContr = (currLog) => {
    // console.log('getCrudLog.currCrudLog', currCrudLog[0]);
    // console.log('getCrudLog Finished');
    let logFromCrud = tBrain.getCrudLog();
    return logItemAdd(currLog, logFromCrud);
}

// setCrudLogFunc - sets up a callback after the transaction completes 
export const setCrudLogFuncContr = (func) => {
    tBrain.setCrudLogFunc(func);
}

export const syncBrainVsOrigContr = (state, dispatch, TBrain) => {
    syncBrainVsOrig(state, dispatch);
}

