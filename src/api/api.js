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
    try {
        const json = await fetchData(URL_GET_AUTH, requestInit);
        if (json.status == 1) {
            console.log("getSid=>", json);
            if (dispatch !== null)
                dispatch({ type: 'SESSION_SID', payload: json });
                return json.status;
        }
    }
    catch (error) {
        error = console.log('An error occurred.', error);
        return error;
    }
    
}

async function fetchData(url_Connect = URL_GET_AUTH, requestInit) {
    // console.log('fetchData requestInit', requestInit);
    let json = "";
    try {
        const response = await fetch(PROXY_URL_PC + url_Connect, requestInit);
        json = await response.json();
        // console.log(url_Connect, json)
        return json;
    }
    catch (error) {
        error = console.log('An error occurred.', error);
        return error;
    }


}

