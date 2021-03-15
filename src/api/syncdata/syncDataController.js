

import { TBrain } from '../dbAPI/provider/tBrain';
import { logItemAdd } from './syncDataLog';
import * as syncBrainVsOrig from './syncBrainVsOrig';
import { CATEGORY_LIST } from '../../reducers/categoryListRdc';
import { CRUD_LOG } from '../../reducers/synDataRdc';

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
    // console.log('getCrudLog.currCrudLog', currCrudLog[0]);
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
    await sendToLog(state.syncDataRdc.syncDataCrudLog, 'Колич. катег. до загрузки' + category.length + '', dispatch);
    tBrain.tReadAll();
    category = await syncBrainVsOrig.getCategoryListUpdate(state, dispatch);
    // console.log('syncBrainVsOrig.category', category[0].categoryID);
    // console.log('syncBrainVsOrig,state', state);
    await dispatch({ type: CATEGORY_LIST, payload: category });
    // console.log('syncBrainVsOrigContr.category.length', category.length);
    //// log section
    //  await sendToLog(state.syncDataRdc.syncDataCrudLog, "Загружено категорий" + category.length, dispatch);
    ///
    let i=0;
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

const sendToLog = async (logFromState, logToBeAdded, dispatch) => {
    let log = logItemAdd (logFromState, logToBeAdded);
    console.log('sendToLog.log', log);
    await dispatch({ type: CRUD_LOG, payload: log });
}

    // category.forEach(async (categ) => {
    //     console.log('syncBrainVsOrig.categ.categoryID', categ.categoryID);
    //     // syncBrainVsOrig.getProductListUpdate(categ.categoryID, state, dispatch).then((prod) => {
    //     let prod = await syncBrainVsOrig.getProductListUpdate('1235', state, dispatch);
    //     prod.forEach(element => {
    //         console.log('syncBrainVsOrig.element', element);
    //         tBrain.tReplace(element);
    //     });
    //     console.log('syncBrainVsOrig.prod', prod[0]);
    //     tBrain.tReadAll();

    // });
    // console.log('syncBrainVsOrig.categ', categ[0]);
    // // });