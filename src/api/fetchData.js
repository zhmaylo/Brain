
import fetch from 'node-fetch';
import { PROXY_URL_PC } from '../constants/url';
import { getSid } from './sid';
import { NO_ERRORS } from './../constants/error';


// getStatusResponse - processing errors/status from the server
// json - response of the server
export function getStatusResponse(json) {
    // console.log("Status of response in getStatusResponse");

    // NO_ERRORS = {code: -1, message: "Response Status 'Ok'. No error. :)"}
    let statusResponse = NO_ERRORS; //status = Ok.

    if ((json.status == 0) && (json.error_code > 0)) {
        let errMessage = "Response Error N" + json.error_code + " - " + json.error_message;
        // console.log("getStatusResponse. errMessage", errMessage);
        // console.log("getStatusResponse.json", json);
        statusResponse = { code: json.error_code, message: json.error_message };
        // alert(errMessage);
    }
    // console.log("getStatusResponse. statusResponse", statusResponse);
    return statusResponse; //return - no error
}


// middleWareFetch - middle function for control over 'sid' and 'internet connection'
// requestUrl - request address
// requestHeader - request header (null for not Get request)
// sidAndTime - object: sid and timeStamp 
// dispatch - dispatch
export const middleWareFetch = async (requestUrl, requestHeader, sidAndTime, dispatch) => {

    // console.log("middleWareFetch. sidAndTime => ", sidAndTime);

    let json, statusResponse;
    for (let index = 0; index < 2; index++) {
        json = await fetchData(requestUrl + sidAndTime.sid, requestHeader);
        statusResponse = getStatusResponse(json);
        // console.log("middleWareFetch. json", json);

        // statusResponse = 5 = Error: Session identifier is outdate)
        if (statusResponse.code !== 5) (index++);
        else (sidAndTime = await getSid(dispatch));
        
    }
    dispatch({ type: 'STATUS_RESPONSE', payload: statusResponse });
    console.log("middleWareFetch. statusResponse => ", statusResponse);
    // console.log ("middleWareFetch. json", json.status)
    return json;
}


// fetchData - receiving data from the server
// requestUrl - request address
// requestHeader - request header
export async function fetchData(requestUrl, requestHeader) {
    let json = "";
    try {
        let response = null;
        // console.log("requestUrl", requestUrl);
        // console.log("requestHeader", requestHeader);

        //"if requestHeader == null" GET request, else - POST request
        if (requestHeader == null) response = await fetch(PROXY_URL_PC + requestUrl)
        else response = await fetch(PROXY_URL_PC + requestUrl, requestHeader);

        // console.log("getJSON. response before =>", response.bodyUsed);
        response = cloneResponse(response);
        json = await response.json();

        // console.log("fetchData. json =>", json);

        return json;
    }
    catch (error) {
        console.log('fetchData => An error occurred.', error);
        // alert('fetchData => An error occurred: ' + error);
        return error;
    }
}

// Stub for Jest
// cloneResponse - return clone response
// response - response, which will cloned
let response2;//cloned response
const cloneResponse = (response) => {
    //bodyUsed = false - response will cloned
    if (!response.bodyUsed) response2 = response.clone();
    //bodyUsed = true - return cloned response
    else response = response2.clone();
    return response;
}
