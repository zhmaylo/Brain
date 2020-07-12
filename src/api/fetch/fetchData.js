
import fetch from 'node-fetch';
import { PROXY_URL_PC } from '../../constants/urlConst';


// fetchData - receiving data from the server
// requestUrl - request address
// requestHeader - request header
export async function fetchData(requestUrl, requestHeader=null) {
    let json = "";
    try {
        let response = null;
        console.log("requestUrl", requestUrl);
        // console.log("requestHeader", requestHeader);
        
        //"if requestHeader == null" GET request, else - POST request
        if (requestHeader === null) response = await fetch(PROXY_URL_PC + requestUrl)
        else response = await fetch(PROXY_URL_PC + requestUrl, requestHeader);

        // console.log("getJSON. response before =>", response.bodyUsed);
        response = await cloneResponse(response);
        json = await response.json();

        // console.log("fetchData. json =>", json);
                
        return json;
    }
    catch (error) {
        // console.log('fetchData => An error occurred.', error);
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
