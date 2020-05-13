
import fetch from 'node-fetch';
import { PROXY_URL_PC, URL_GET_CATEGORY } from '../constants/url';


// fetchData - processing errors/statuses from the server
// requestUrl - request address
// requestHeader - request header
export function fetchData(requestUrl = URL_GET_CATEGORY, requestHeader = null) {
    const json = getJSON(requestUrl, requestHeader).then(json => {
        console.log("Status of response in fetchData");
        console.log("fetchData.json", json)
        if (json.error_code > 0) {
            console.log("Error N", json.error_code, " - ", json.error_message);
            console.log("fetchData.json", json)
        }
        else console.log("Status 'Ok'. No error. :) = ", json.status);
        return json;
    })
    return json;
}

// getJSON - receiving data from the server
// requestUrl - request address
// requestHeader - request header
async function getJSON(requestUrl, requestHeader) {
    // console.log("fetchData url_Connect, requestInit", PROXY_URL_PC+url_Connect, requestInit)
    let json = "";
    try {

        let response;
        // console.log("requestHeader", requestHeader)

        //"if requestHeader == null" GET request, else - POST request
        if (requestHeader == null) response = await fetch(PROXY_URL_PC + requestUrl)
        else response = await fetch(PROXY_URL_PC + requestUrl, requestHeader);

        // console.log("fetchData.response", response)
        json = await response.json();
        console.log("getJSON. json =>", json);
        return json;
    }
    catch (error) {
        error = console.log('An error occurred.', error);
        return error;
    }
}

