
import { TBrain } from '../dbAPI/provider/tBrain';
import { logItemAdd } from './syncDataLog';
import * as syncBrainVsOrig from './syncBrainVsOrig';
import { CATEGORY_LIST } from '../../reducers/categoryListRdc';
import { getPriceList } from './../priceList/priceList';
import { DB_LOG } from '../../reducers/synDataRdc';
import * as storage from '../storage';
import { CAT_ID_DB_KEY } from './../../constants/storageConst';


const tBrain = new TBrain;

// clearBrainTblContr - Brain table clear
export async function clearBrainTblContr(state, dispatch) {
    tBrain.tDeleteAll();
    let logFromState = state.syncDataRdc.syncDataCrudLog;
    let logToBeAdd = tBrain.tReadAll();
    sendToLog(logFromState, logToBeAdd, dispatch);
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
    logFromState = sendToLog(logFromState, "Загружен список из " + `${category.length}` + " категорий", dispatch );
    let prod = [];
    let i = await getCurrCateg(category.length);

    while (i < category.length) {
        if (category[i].parentID == 1) {
            logFromState = sendToLog(logFromState, 'Загружается: категория> ' + `${i + 1}` + ' | ID> ' + `${category[i].categoryID}` + ' | имя> ' + `${category[i].name}`, dispatch);

            prod = await syncBrainVsOrig.getProductListUpdate(category[i].categoryID, state, dispatch);
            prod.forEach((element) => { tBrain.tReplace(element) });
            logFromState = sendToLog(logFromState,
                'Загружено: ID> ' + `${category[i].categoryID}` + ' | имя> ' + `${category[i].name}` + ' | позиций> ' + `${String(prod.length)}` + '\nВсего загружено категорий: ' + `${i + 1}` + ' из ' + `${category.length}`, dispatch);
        }
        prod = [];
        i++;
        storage.storeData(CAT_ID_DB_KEY, i);
    }
}

// getCurrCateg - return current download category
// catDownloadMax - maximum number of categories to download
const getCurrCateg = async (catDownloadMax) => {
    let i = 0;
    let currCateg = await storage.getData(CAT_ID_DB_KEY);
    if ((currCateg == null) || (currCateg >= catDownloadMax )) {currCateg = i};
    return currCateg;
}

// readTableInfo - return records number
export const readTableInfoContr = (state, dispatch) => {
    let logFromState = state.syncDataRdc.syncDataCrudLog;
    let logToBeAdd = tBrain.tReadAll();
    sendToLog(logFromState, logToBeAdd, dispatch);
}

// sentToLog
// logFromState - log from state
// logToBeAdd - log to be added to the site
// dispatch
const sendToLog = (logFromState, logToBeAdd, dispatch) => {
    let log = logItemAdd(logFromState, logToBeAdd);
    dispatch({ type: DB_LOG, payload: log });
    return log;
}
