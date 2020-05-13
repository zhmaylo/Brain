
import fetch from 'node-fetch';

import { URL_GET_AUTH, PROXY_URL_PC } from './../constants/url';
import { USER_AUTH } from './../constants/authoriz';

// getSid - returns session SID
// dispatch - callback 
// dispatch = null - value for test
export const getSid = async (dispatch = null) => {
    let requestHeader = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: USER_AUTH
    };
    let json = 0;
    try {
        json = await fetchData(URL_GET_AUTH, requestHeader);
        // console.log("getSid=>", json);
        if ( (dispatch !== null) && (json.status == 1)) {

            dispatch({ type: 'SESSION_SID', payload: json });
        }
    }
    catch (error) {
        error = console.log('An error occurred.', error);
        return error;
    }
    return json;
}

// fetchData - receiving data from the server
// requestUrl - request address
// requestHeader - request header
export async function fetchData(requestUrl = URL_GET_AUTH, requestHeader) {
    // console.log("fetchData url_Connect, requestInit", PROXY_URL_PC+url_Connect, requestInit)
    let json = "";
    try {
        const response = await fetch(PROXY_URL_PC + requestUrl, requestHeader);
        // console.log("fetchData.response", response)
        json = await response.json();
        // console.log("fetchData json =>", json);
        return json;
    }
    catch (error) {
        error = console.log('An error occurred.', error);
        return error;
    }


}

