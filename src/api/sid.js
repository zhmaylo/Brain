
import { URL_POST_AUTH } from '../constants/url';
import { fetchData } from './fetchData';
import { setTimeStampToSid } from './timeStamp';
import { REQUEST_HEADER_AUTH } from './../constants/authoriz';

// getSid - returns session SID
// dispatch - this is callback 
export const getSid = async (dispatch) => {
    let json = await fetchData(URL_POST_AUTH, REQUEST_HEADER_AUTH);
    let sidAndTime = { sid: json.result, timeStamp: null };

    console.log("getSid=> json ", json);
    // console.log("getSid=> dispatch ", dispatch);
    // console.log("getSid. sidAndTime (before IF) =>", sidAndTime.sid);

    sidAndTime = setTimeStampToSid(sidAndTime);
    dispatch({ type: 'SESSION_SID', payload: sidAndTime });
    // console.log("getSid. sidAndTime 2 (into IF) =>", sidAndTime);    

    return sidAndTime;
}

//state.sessionSidRdc.sessionSid - 
