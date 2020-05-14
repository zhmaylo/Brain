
import fetch from 'node-fetch';
import { PROXY_URL_PC } from '../constants/url';


// getStatusResponse - processing errors/status from the server
// json - response of the server
export function getStatusResponse(json) {
    // console.log("Status of response in fetchData");
    let statusResponse = -1; //status = Ok.
    if ((json.status == 0) && (json.error_code > 0)) {
        console.log("Error N", json.error_code, " - ", json.error_message);
        // console.log("fetchData.json", json);
        statusResponse = json.error_code;
        return statusResponse; //return error code. Error value > 0
    }
    else console.log("Status 'Ok'. No error. :) = ", json.status);
    return statusResponse;
}

// fetchData - receiving data from the server
// requestUrl - request address
// requestHeader - request header
export async function fetchData(requestUrl, requestHeader) {
    let json = "";
    try {

        let response;
        // console.log("requestHeader", requestHeader)

        //"if requestHeader == null" GET request, else - POST request
        if (requestHeader == null) response = await fetch(PROXY_URL_PC + requestUrl)
        else response = await fetch(PROXY_URL_PC + requestUrl, requestHeader);
        // console.log("getJSON. response =>", response );
        json = await response.json();
        // console.log("getJSON. json =>", json);
        return json;
    }
    catch (error) {
        console.log('fetchData => An error occurred.', error);
        return error;
    }
}

