import { PROXY_URL_PC, URL_GET_AUTH, LOGIN, PASSMD5 } from './../constants/index';


let userAut = 'login=' + LOGIN + '&password=' + PASSMD5;

export const getSid = (dispatch) => {
    let requestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: userAut
    };
    fetchData(URL_GET_AUTH, requestInit).then((json) => {
        if (json.status == 1) {
            dispatch({ type: 'SESSION_SID', payload: json });
            return true;
        }
        else return false;

    })
}

export async function fetchData(url_Connect = URL_GET_AUTH, requestInit) {
    console.log('fetchData requestInit', requestInit);

    return (await fetch(PROXY_URL_PC + url_Connect, requestInit)
        .then(response => response.json(),
            error => console.log('An error occurred.', error))
        .then(json => {
            console.log(url_Connect, json)
            return json;
        }))
}

