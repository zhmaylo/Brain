
import { SID_TIME_LIFE } from './../constants/authoriz';

// setTimeStampToSid - set time stamp to sid
// sid - sid of session (no objesct)

export const setTimeStampToSid = (sidAndTime) => {
    // console.log("setTimeStampToSid. sidAndTime=>", sidAndTime);
    sidAndTime.timeStamp = getCurrTime ();
    return sidAndTime;
}

// updateTimeStampToSid - update time stamp to sid
// sid - sid of session
export const updateTimeStampToSid = (sidAndTime, dispatch) => {
    // console.log("updateTimeStampToSid after if", sidAndTime);
    if (!isTimeExpired(sidAndTime)) {
        sidAndTime = {sid: sidAndTime.sid, timeStamp: getCurrTime ()};
        dispatch({ type: 'SESSION_SID', payload: sidAndTime });
        // console.log("updateTimeStampToSid into if", sidAndTime);
        return sidAndTime;  // time update
    }
    // time expired
    else return false;
}

// currTime - get current time (ms)
const getCurrTime = () => {
    //current time in ms since January 1, 1970
    return new Date().getTime();
}


// isTimeExpired - control time expired
// sid - sid of session
const isTimeExpired = (sidAndTime) => {
    if (Math.abs(getCurrTime() - sidAndTime.timeStamp) < SID_TIME_LIFE)  
        return false;//false - time not expired 
    else return true;//true - time expired
}


