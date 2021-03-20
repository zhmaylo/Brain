

import { TBrain } from '../dbAPI/provider/tBrain';
import { logItemAdd } from './syncDataLog';
import * as syncBrainVsOrig from './syncBrainVsOrig';
import { CATEGORY_LIST } from '../../reducers/categoryListRdc';
import { CRUD_LOG } from '../../reducers/synDataRdc';
import { clone } from './../clone';

const tBrain = new TBrain;
// const syncBrainVsOrig = new SyncBrainVsOrig;

// clearBrainTblContr - Brain table clear
export async function clearBrainTblContr(state, dispatch) {
    tBrain.tDeleteAll();
    let logFromState = state.syncDataRdc.syncDataCrudLog;
    let logToBeAdd = tBrain.tReadAll();
    let log = sendToLog(logFromState, logToBeAdd, dispatch);
    // console.log('log', log);

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

// syncBrainVsOrigContr - controller for synchro tBrain with base Original
export const syncBrainVsOrigContr = async (state, dispatch) => {
    let logFromState = state.syncDataRdc.syncDataCrudLog;
    let category = [];
    logFromState = sendToLog(logFromState, 'Загрузка списка категорий из сервера ', dispatch);
    category = await syncBrainVsOrig.getCategoryListUpdate(state, dispatch);
    await dispatch({ type: CATEGORY_LIST, payload: category });
    logFromState = sendToLog(logFromState, "Загружено категорий: " + category.length, dispatch);
    let i = 0; let prod = [];
    // console.log('syncBrainVsOrig.category before While');
    while (i < category.length && i < 20) {
        prod = await syncBrainVsOrig.getProductListUpdate(category[i].categoryID, state, dispatch);
        logFromState = sendToLog(logFromState,
            'Загружено: ID> ' + `${category[i].categoryID}` + ' | имя> ' + `${category[i].name}` + ' | позиций> ' + `${String(prod.length)}` +
            '\nВсего загружено категорий: ' + `${i + 1}` + ' из ' + `${category.length}`, dispatch);
        // console.log('syncBrainVsOrig.prod', prod);

        prod.forEach((element) => {
            tBrain.tReplace(element);
        });
    
        i++;
    }


}

// readTableInfo - return records number
export const readTableInfoContr = (state, dispatch) => {
    let logFromState = state.syncDataRdc.syncDataCrudLog;
    let logToBeAdd = tBrain.tReadAll();
    let log = sendToLog(logFromState, logToBeAdd, dispatch);
    // console.log ('log', log);
}

// sentToLog
// logFromState - log from state
// logToBeAdd - log to be added to the site
// dispatch
const sendToLog = (logFromState, logToBeAdd, dispatch) => {
    let log = logItemAdd(logFromState, logToBeAdd);
    // console.log('sendToLog.log', log);
    dispatch({ type: CRUD_LOG, payload: log });
    return log;
}
