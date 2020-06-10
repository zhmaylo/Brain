import { getSid } from './../sid/sid';
import { NO_ERRORS, ERRORS_SID } from '../../constants/errorConst';
import { fetchData } from '../fetch/fetchData';

// middleWareFetch - middle function for control over 'sid' and 'internet connection'
// requestUrl - request address
// requestHeader - request header (null for not Get request)
// sidAndTime - object: sid and timeStamp 
// dispatch - dispatch
export const middleWareFetch = async (requestUrl, requestHeader, sidAndTime, dispatch) => {

    console.log("middleWareFetch. sidAndTime => ", sidAndTime);
    
    let json;
    
    let statusResponse;
    for (let index = 0; index < 2; index++) {
        
        json = await fetchData(requestUrl + sidAndTime.sid, requestHeader);
        statusResponse = getStatusResponse(json);
        console.log("middleWareFetch. json", json);

        // if there is an error, then return the new SID
        if (ERRORS_SID.includes(statusResponse.code) || sidAndTime.sid == undefined)  
            (sidAndTime = await getSid(dispatch));
        else  (index++);

    }
    dispatch({ type: 'STATUS_RESPONSE', payload: statusResponse });
    console.log("middleWareFetch. statusResponse => ", statusResponse);
    // console.log ("middleWareFetch. json", json.status)
    return json;
}

// getStatusResponse - processing errors/status from the server
// json - response of the server
export function getStatusResponse(json) {
    // console.log("Status of response in getStatusResponse");

    // NO_ERRORS = {code: -1, message: "Response Status 'Ok'. No error. :)"}
    let statusResponse = NO_ERRORS; //status = Ok.
    const errArr = [0, undefined];
    if (errArr.includes(json.status) || (json.error_code > 0)) {
        let errMessage = "Response Error N" + json.error_code + " - " + json.error_message;
        console.log("getStatusResponse. errMessage", errMessage);
        // console.log("getStatusResponse.json", json);
        
        statusResponse = { code: json.error_code, message: errMessage };

        // alert(errMessage);
    }
    
    // console.log("getStatusResponse. statusResponse", statusResponse);
    return statusResponse; //return - no error
}

