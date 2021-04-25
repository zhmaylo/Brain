import { clone } from '../clone';

const LOG_MAX_LENGTH = 2000;

// logItemAdd - add item to log
// logFromState - log from state
// logToBeAdded - log to be added to the site
export const logItemAdd = (logFromState, logToBeAdd) => {

    let logClone = clone(logFromState);
    logClone = logTrim(logClone);
    // console.log('logItemAdd.logClone', logClone);
    // console.log('logToBeAdd', logToBeAdd);
    // console.log('logToBeAdd.length', logToBeAdd.length);
    if (logToBeAdd.length > 0) {
        let timeStamp = Date.now();
        // console.log('logToBeAdd', logToBeAdd);
        // console.log('logFromState', logFromState);
        let date = formatDate(timeStamp);
        logToBeAdd = date + logToBeAdd;
        
        logClone.push({ id: String(timeStamp), log: logToBeAdd });
    }

    // console.log('logItemAdd.logClone', logClone)
    return logClone;

};


// logTrim - trim the length og the array
// logMaxLength - maximum array length
const logTrim = (currLog = [], logMaxLength = LOG_MAX_LENGTH) => {
    // console.log('logTrim.currLog', currLog);
    let logClone = clone(currLog);
    // console.log('logTrim.logClone', logClone);
    while (logClone.length >= logMaxLength) {
        logClone.shift();
        // console.log('logTrim.logClone', logClone);
    };
    return logClone;
};

// formatDate - date formating
const formatDate = (id) => {
    let date = new Date(Number(id));
    let minute = date.getMinutes();
    if (minute < 10) minute = '0' + minute;
    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;

    let dateOut = date.getFullYear() + '-'
        + String(Number(date.getMonth()) + 1) + '-'
        + date.getDate() + ' '
        + date.getHours() + ':'
        + minute + ':'
        + seconds + '\n';

    // console.log('dateOut', dateOut);
    // console.log('id', id);
    // console.log('date', date.toString('yyyy MM dd'));
    return dateOut;
}
