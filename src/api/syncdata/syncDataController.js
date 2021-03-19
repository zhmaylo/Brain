

import { TBrain } from '../dbAPI/provider/tBrain';
import { logItemAdd } from './syncDataLog';
import * as syncBrainVsOrig from './syncBrainVsOrig';
import { CATEGORY_LIST } from '../../reducers/categoryListRdc';
import { CRUD_LOG } from '../../reducers/synDataRdc';
import { clone } from './../clone';

const tBrain = new TBrain;
// const syncBrainVsOrig = new SyncBrainVsOrig;

// Brain table clear
export async function clearBrainTblContr() {
    tBrain.tDeleteAll();
    tBrain.tReadAll();
    // console.log('clearBrainTbl finished',)
}

// getCrudLog - Crud log
// currCrudLog - current array og CRUD log
export const getCrudLogContr = (currLog) => {
    // console.log('getCrudLog.currCrudLog', currLog);
    // console.log('getCrudLog Finished');
    let logFromCrud = tBrain.getCrudLog();
    return logItemAdd(currLog, logFromCrud);
}

// setCrudLogFunc - sets up a callback after the transaction completes 
export const setCrudLogFuncContr = (func) => {
    tBrain.setCrudLogFunc(func);
}

export const syncBrainVsOrigContr = async (state, dispatch) => {
    // console.log('syncBrainVsOrigContr.dispatch', dispatch);
    let category = [];
    let log = sendToLog(state.syncDataRdc.syncDataCrudLog, 'Текущее колич. категорий: ' + category.length, dispatch);
    category = await syncBrainVsOrig.getCategoryListUpdate(state, dispatch);
    //  console.log('syncBrainVsOrigContr.state.syncDataRdc.syncDataCrudLog',  state.syncDataRdc.syncDataCrudLog);
    //  console.log('syncBrainVsOrigContr. log',  log);
    // console.log('syncBrainVsOrig.category', category[0].categoryID);
    // console.log('syncBrainVsOrig,state', state);
    await dispatch({ type: CATEGORY_LIST, payload: category });

    // console.log('syncBrainVsOrigContr.category.length', category.length);
    //// log section
    log = sendToLog(log, "Загружено категорий: " + category.length, dispatch);
    ///
    let i = 0;
    console.log('syncBrainVsOrig.category before While');

    // while (i < category.length && i < 2) {
    //     let prod = await syncBrainVsOrig.getProductListUpdate(category[i].categoryID, state, dispatch);
    //     console.log('syncBrainVsOrig.prod', prod);
    //     console.log('syncBrainVsOrig.category[i].categoryID', category[i].categoryID);
    //     sendToLog(state.syncDataRdc.syncDataCrudLog, "Загрузка продуктов по категориям", dispatch);
    //     sendToLog(state.syncDataRdc.syncDataCrudLog, "Загружено категорий => " + i, dispatch);
    //     // tBrain.tReadAll();
    //     // prod.forEach((element) => {
    //     //     console.log('syncBrainVsOrig.element', element);
    //     //     tBrain.tReplace(element);

    //     // });
    //     // console.log('syncBrainVsOrig.prod', prod[0]);
    //     // tBrain.tReadAll();
    //     i++;
    // }


}

// readTableInfo - return records number
export const readTableInfo = () => {
    tBrain.tReadAll();
}

// sentToLog
// logFromState - log from state
// logToBeAdded - log to be added to the site
// dispatch
const sendToLog = (logFromState, logToBeAdded, dispatch) => {
    let log = logItemAdd(logFromState, logToBeAdded);
    console.log('sendToLog.log', log);
    dispatch({ type: CRUD_LOG, payload: log });
    return log;
}
