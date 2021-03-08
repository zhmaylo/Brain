
import { v1 as timeStamp } from 'uuid';
import {TBrain} from '../dbAPI/provider/tBrain';
import { clone } from './../clone';
const tBrain = new TBrain;

// Brain table clear
export async function clearBrainTbl () {
    tBrain.tDeleteAll();
    // console.log('clearBrainTbl finished',)
}

// Crud log
// currCrudLog - current array og CRUD log
export const getCrudLog = (currCrudLog) => {
    // console.log('getCrudLog.currCrudLog', currCrudLog[0]);
    currCrudLog=clone(currCrudLog);
    let log =  tBrain.getCrudLog();
    if (log.length > 0) currCrudLog.push({id: timeStamp()+'', log});
    // console.log('getCrudLog Finished');
    return currCrudLog;
}

export const setCrudLogFunc = (func) => {
    tBrain.setCrudLogFunc(func)
}