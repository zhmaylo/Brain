
import { URL_GET_PRODUCTS } from "../../constants/urlConst";
import { middleWareFetch } from './../fetch/middleWareFetch';
import { OFFSET, LIMIT } from './../../constants/productsConst';
import { argMiddle } from './../argMiddle';
import * as storage from '../storage/storage';
import { SYNC_OFFSET_KEY } from "../../constants/storageConst";
import clone from "clone";
import { PROG_BAR_CUR_VOL, PROG_BAR_MAX_VOL, SPINER_TOGGLE } from "../../constants/actionConst";


// getProductsList - returns products list of a specified category from server. JSON-format.
// categoryID - "id" produtcts category
// sidAndTime - session SID and TimeStamp 
// dispatch - this is callback
export const getProductsList = async (categoryID, sidAndTime, dispatch, flagSync = false) => {
    let json = [], offset = 0, arrTemp, result;

    offset = await loadOffset(flagSync);

    dispatch({ type: PROG_BAR_CUR_VOL, payload: offset });

    argMiddle.requestUrl = URL_GET_PRODUCTS + categoryID + '/';

    argMiddle.sidAndTime = sidAndTime;
    argMiddle.dispatch = dispatch;
    dispatch({ type: SPINER_TOGGLE, payload: true });

    do {
        argMiddle.params = '?offset=' + offset + '&limit=' + LIMIT;
        arrTemp = await middleWareFetch(argMiddle);

        result = await arrTemp.json.result;

        argMiddle.sidAndTime = arrTemp.sidAndTime;
        removeProductAbsence(result.list).forEach((item) => json.push(item));

        offset += OFFSET;
        storeOffset(offset, flagSync);
        setProgBar(offset, result.count, dispatch);

    } while (offset <= result.count); //json.result.length)

    storeOffset(0, flagSync);
    setProgBar(0, 0, dispatch);

    dispatch({ type: SPINER_TOGGLE, payload: false });

    return json;
}

// removeProductAbsence - remove product absence
// data - entering array
// arr - compressed array
export const removeProductAbsence = (data) => {
    let arr = [];
    data.forEach((item) => {
        if ((item.stocks_expected.length != 0) && (item.available.length != 0)) arr.push(item);
    });
    return clone(arr);
}

// setSizeListProd - set size view list products (pagination)
// currSize - current size view list of products
// stepPagin - step pagination
// maxSize - lenght list of products
export const setSizeListProd = (currSize, stepPagin, maxSize) => {
    currSize += stepPagin;
    (currSize >= maxSize) && (currSize = maxSize);
    return currSize;
}

// setProgBar - set state
// curVol - the current value of the progress bar
// maxVol - the maximum value of the progress bar
const setProgBar = (curVol, maxVol, dispatch) => {
    dispatch({ type: PROG_BAR_CUR_VOL, payload: curVol });
    dispatch({ type: PROG_BAR_MAX_VOL, payload: maxVol });
}

// loadOffset - get 'offset'
export const loadOffset = async (flagSync) => {
    if (!flagSync) return 0;

    let offset = await storage.getData(SYNC_OFFSET_KEY);
    if (offset == null) offset = 0;
    return offset;
}

// storeOffset - storage 'offset'
export const storeOffset = async (offset, flagSync) => {
    if (!flagSync) return false;
    let outdata = await storage.storeData(SYNC_OFFSET_KEY, offset);
    return outdata;
}