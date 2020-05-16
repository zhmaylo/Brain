
import fetch from 'node-fetch';
import { PROXY_URL_PC } from '../constants/url';
import { updateTimeStampToSid } from './timeStamp';
import { getSid } from './sid';


// getStatusResponse - processing errors/status from the server
// json - response of the server
// export function getStatusResponse(json) {
//     // console.log("Status of response in fetchData");
//     let statusResponse = -1; //status = Ok.
//     if ((json.status == 0) && (json.error_code > 0)) {
//         console.log("Error N", json.error_code, " - ", json.error_message);
//         // console.log("fetchData.json", json);
//         statusResponse = json.error_code;
//         return statusResponse; //return error code. Error value > 0
//     }
//     else console.log("Status 'Ok'. No error. :) = ", json.status);
//     return statusResponse;
// }

//clone response
let response2;

export const middleWareFetch =
    async (requestUrl, requestHeader = null, sidAndTime, dispatch) => {
        //if time stamp out, then get new Sid
        console.log("middleWareFetch. sidAndTime => ", sidAndTime);
        //'updateTimeStampToSid' return 'false' - time expired
        //'updateTimeStampToSid' return 'true' - time update
        if (!updateTimeStampToSid(sidAndTime, dispatch)) (sidAndTime = await getSid(dispatch))
        
        console.log("middleWareFetch. sidAndTime 2 => ", sidAndTime);
        return fetchData(requestUrl + sidAndTime.sid, requestHeader);
    }

// fetchData - receiving data from the server
// requestUrl - request address
// requestHeader - request header
export async function fetchData(requestUrl, requestHeader) {
    let json = "";
    try {
        let response = null;
        console.log("requestUrl", requestUrl);
        console.log("requestHeader", requestHeader);
        
        //"if requestHeader == null" GET request, else - POST request
        if (requestHeader == null) response = await fetch(PROXY_URL_PC + requestUrl)
        else response = await fetch(PROXY_URL_PC + requestUrl, requestHeader);
        
        // console.log("getJSON. response before =>", response.bodyUsed);
        
        /////////////////
        // Stub for Jest- Clone response
        //bodyUsed = false - clone response
        if (!response.bodyUsed) response2 = response.clone();
        //bodyUsed = true - return previous response
        else response = response2.clone();
        // End. Stub for Jest
        /////////////////

        json = await response.json();
        
        // console.log("getJSON. json =>", json);
        return json;
    }
    catch (error) {
        console.log('fetchData => An error occurred.', error);
        return error;
    }
}

