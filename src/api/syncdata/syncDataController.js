

import { TBrain } from '../dbAPI/provider/tBrain';
import { logItemAdd } from './syncDataLog';
import * as syncBrainVsOrig from './syncBrainVsOrig';
import { CATEGORY_LIST } from '../../reducers/categoryListRdc';
import { getPriceList } from './../priceList/priceList';
import { DB_LOG } from '../../reducers/synDataRdc';
import * as storage from '../storage';
// import * as asyncStorage from './../storage';


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

export const getPriceBrain = (state, dispatch) => {
    getPriceList(state, dispatch);
}

// syncBrainVsOrigContr - controller for synchro tBrain with base Original
export const syncBrainVsOrigContr = async (state, dispatch) => {

    let logFromState = state.syncDataRdc.syncDataCrudLog;
    let category = [];
    logFromState = sendToLog(logFromState, 'Загрузка списка категорий из сервера ', dispatch);
    category = await syncBrainVsOrig.getCategoryListUpdate(state, dispatch);
    await dispatch({ type: CATEGORY_LIST, payload: category });
    logFromState = sendToLog(logFromState, "Загружено категорий: " + category.length, dispatch);
    let prod = [];
    let i = await getCurrCateg(category.length);
    // console.log('syncBrainVsOrig. i', i);
    // console.log('syncBrainVsOrig.category before While');

    while (i < category.length) {
        prod = await syncBrainVsOrig.getProductListUpdate(category[i].categoryID, state, dispatch);
        logFromState = sendToLog(logFromState,
            'Загружено: ID> ' + `${category[i].categoryID}` + ' | имя> ' + `${category[i].name}` + ' | позиций> ' + `${String(prod.length)}` + '\nВсего загружено категорий: ' + `${i + 1}` + ' из ' + `${category.length}`, dispatch);
        // console.log('syncBrainVsOrig.prod', prod);

        prod.forEach((element) => { tBrain.tReplace(element) });
        i++;
        storage.storeData('currCateg', i);
    }
}

// getCurrCateg - return current download category
// catDownloadMax - maximum number of categories to download
const getCurrCateg = async (catDownloadMax, state, dispatch) => {

    let i = 0;
    let currCateg = await storage.getData('currCateg')
    // console.log('currCateg', currCateg);
    if (currCateg == null) storage.storeData('currCateg', i);
    // if (currCateg < catDownloadMax) { i = currCateg } else { i = categoryLength };
    if (currCateg < catDownloadMax) { return currCateg }
    else dispatch({ type: ALERT_SHOW, payload: true });
    // console.log('syncBrainVsOrig.categoryID', category[0].categoryID);
    // console.log('syncBrainVsOrig. i', i);
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
    dispatch({ type: DB_LOG, payload: log });
    return log;
}
