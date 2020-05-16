
import { SID_TIME_LIFE } from './../constants/authoriz';

// setTimeStampToSid - add time stamp to sid
// sid - sid of session (no objesct)

export const setTimeStampToSid = (sidAndTime) => {
    // console.log("setTimeStampToSid. sidAndTime=>", sidAndTime);
    sidAndTime.timeStamp = getCurrTime ();
    return sidAndTime;
}

// updateTimeStampToSid - update time stamp to sid
// sid - sid of session
export const updateTimeStampToSid = (sid, dispatch) => {
   
    if (!isTimeExpired(sid)) {
        sid = {sid: sid.sid, timeStamp: getCurrTime ()};
        dispatch({ type: 'SESSION_SID', payload: sid })
        return true;  // time update
    }
    // time expired
    else return false;
}

// currTime - get current time (ms)
export const getCurrTime = () => {
    //current time in ms since January 1, 1970
    return new Date().getTime();;
}


// isTimeExpired - control time expired
// sid - sid of session
const isTimeExpired = (sid) => {
    if (Math.abs(getCurrTime() - sid.timeStamp) < SID_TIME_LIFE)  
        return false;//false - time not expired 
    else return true;//true - time expired
}


// // addTimeStampToSid - add time stamp to sid
// // sid - sid of session
// // currTime - current time
// const addTimeStampToSid = (sid, currTime) => {
//     return sid;
// }



// // compareTimeSidVsReal - compare time SID and time last request
// // sid - session sid
// const compareTimeSidVsReal = (sid) => {
//     return sid;
// }


