

import { TBrain } from '../dbAPI/provider/tBrain';
import { logItemAdd } from './syncDataLog';
import * as syncBrainVsOrig from './syncBrainVsOrig';
import { CATEGORY_LIST } from '../../reducers/categoryListRdc';

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
    // tBrain.tReadAll();
    let category = await syncBrainVsOrig.getCategoryListUpdate(state, dispatch);
    console.log('syncBrainVsOrig.category', category);
    // console.log('syncBrainVsOrig,state', state);
    dispatch({ type: CATEGORY_LIST, payload: category });

    
    let i=0;
    
    // while (i < category.length || i < 1) {
    //     let prod = await syncBrainVsOrig.getProductListUpdate(cetegory[i].categoryID, state, dispatch);
    //     console.log('syncBrainVsOrig.prod', prod);
    //     console.log('syncBrainVsOrig.category[i].categoryID', category[i].categoryID);
    //     prod.forEach(async (element) => {
    //         console.log('syncBrainVsOrig.element', element);
    //         await tBrain.tReplace(element);
            
    //     });
    //     console.log('syncBrainVsOrig.prod', prod[0]);
    //     tBrain.tReadAll();
        i++;
    // }

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
}

