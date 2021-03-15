import { clone } from './../clone';
import { v1 as timeStamp } from 'uuid';

const LOG_MAX_LENGTH = 1000;

// logItemAdd - add item to log
// logFromState - log from state
// logToBeAdded - log to be added to the site
export const logItemAdd = (logFromState, logToBeAdded) => {
    let logClone = clone(logFromState);
    logClone = logTrim(logClone);
    if (logToBeAdded.length > 0) logClone.push({ id: timeStamp() + '', log: logToBeAdded });
    return logClone;
    
}


// logTrim - trim the length og the array
// logMaxLength - maximum array length
const logTrim = (currLog = [], logMaxLength = LOG_MAX_LENGTH) => {
    // console.log('logTrim.currLog', currLog);
    let logClone = clone(currLog);
    // console.log('logTrim.logClone', logClone);
    while (logClone.length >= logMaxLength) {
        // logClone.shift();
        // console.log('logTrim.logClone', logClone);
    };
    return logClone;
}
