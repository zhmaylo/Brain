
// import { SID_TIME_LIFE } from './../constants/authoriz';

// setTimeStampToSid - set time stamp to sid
// sid - sid of session (no objesct)

export const setTimeStampToSid = (sidAndTime) => {
    // console.log("setTimeStampToSid. sidAndTime=>", sidAndTime);
    sidAndTime.timeStamp = getCurrTime();
    return sidAndTime;
}

// currTime - get current time (ms)
const getCurrTime = () => {
    //current time in ms since January 1, 1970
    return new Date().getTime();
}



