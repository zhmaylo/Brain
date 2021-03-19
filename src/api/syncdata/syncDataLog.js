import { clone } from './../clone';

const LOG_MAX_LENGTH = 1000;

// logItemAdd - add item to log
// logFromState - log from state
// logToBeAdded - log to be added to the site
export const logItemAdd = (logFromState, logToBeAdded) => {

    let logClone = clone(logFromState);
    logClone = logTrim(logClone);
    // console.log('logItemAdd.logClone', logClone);
    console.log('logToBeAdded', logToBeAdded);
    console.log('logToBeAdded.length', logToBeAdded.length);
    if (logToBeAdded.length > 0) logClone.push({ id: `${Date.now()}`, log: logToBeAdded });

    console.log('logItemAdd.logClone', logClone)
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
