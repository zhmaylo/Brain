
import fetch from 'node-fetch';
import { PROXY_URL_PC } from '../constants/url';
import { updateTimeStampToSid, isTimeExpired } from './timeStamp';
import { getSid } from './sid';


// getStatusResponse - processing errors/status from the server
// json - response of the server
export function getStatusResponse(json) {
    // console.log("Status of response in fetchData");
    let statusResponse = 1; //status = Ok.
    if ((json.status == 0) && (json.error_code > 0)) {
        let errMesage = "Response Error N" + json.error_code + " - " + json.error_message;
        console.log(errMesage);
        
        // console.log("fetchData.json", json);
        statusResponse = json.error_code;
        alert(errMesage);
        return statusResponse; //return error code. Error value > 0
      
    }
    else console.log("Response Status 'Ok'. No error. :) = ", json.status);
    return statusResponse; //return "1" - no error
}


// middleWareFetch - middle function for control over 'sid' and 'internet connection'
// requestUrl - request address
// requestHeader - request header (null for not Get request)
// sidAndTime - object: sid and timeStamp 
// dispatch - dispatch
export const middleWareFetch = async (requestUrl, requestHeader, sidAndTime, dispatch) => {

    // console.log("middleWareFetch. sidAndTime => ", sidAndTime);
    
    //if time stamp expired, then get new Sid
    (isTimeExpired(sidAndTime)) && (sidAndTime = await getSid(dispatch))
    
    // console.log("middleWareFetch. sidAndTime 2 => ", sidAndTime);
    let json = await fetchData(requestUrl + sidAndTime.sid, requestHeader);

    sidAndTime = updateTimeStampToSid(sidAndTime, dispatch);
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

        console.log("fetchData. json =>", json);
        //find error in response. return '1' - no error
        getStatusResponse(json);
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
let response2;//clone response
const cloneResponse = (response) => {
        //bodyUsed = false - clone response
        if (!response.bodyUsed) response2 = response.clone();
        //bodyUsed = true - return previous response
        else response = response2.clone();
    return response;
}
