import { PROXY_URL_PC, URL_GET_AUTH, USER_AUT } from './../constants/index';
import fetch from 'node-fetch';

export const getSid = async (dispatch = null) => {
    let requestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: USER_AUT
    };
    let json = 0;
    try {
        json = await fetchData(URL_GET_AUTH, requestInit);
        console.log("getSid=>", json);
        if ((json.status == 1) && (dispatch !== null)) {
             
             dispatch({ type: 'SESSION_SID', payload: json });
        // return json;
        }
    }
    catch (error) {
        error = console.log('An error occurred.', error);
        return error;
    }
 return json;
}

export async function fetchData(url_Connect = URL_GET_AUTH, requestInit) {
    // console.log("fetchData url_Connect, requestInit", PROXY_URL_PC+url_Connect, requestInit)
    let json = "";
    try {
        const response = await fetch(PROXY_URL_PC + url_Connect, requestInit);
        // console.log("fetchData.response", response)
        json = await response.json();
        console.log("fetchData json =>", json);
        return json;
    }
    catch (error) {
        error = console.log('An error occurred.', error);
        return error;
    }


}

