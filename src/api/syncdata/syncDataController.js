import React from 'react';

import { TBrain } from '../dbAPI/provider/tBrain';
import { logItemAdd } from './syncDataLog';
import { SyncBrainVsOrig } from './syncBrainVsOrig';

const tBrain = new TBrain;
const syncBrainVsOrig = new SyncBrainVsOrig;

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

export const syncBrainVsOrigContr = (state, dispatch) => {
    // console.log('syncBrainVsOrigContr.dispatch', dispatch);
    syncBrainVsOrig.getCategoryListUpdate(state, dispatch).then(() => {
        // console.log('data', data);
        syncBrainVsOrig.getProductListUpdate (state, dispatch).then(()=>{
            tBrain.tReplace();
        });
    });


}

