jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { URL_POST_AUTH, PROXY_URL_PC, URL_GET_CATEGORY } from './../constants/url';
import { REQUEST_HEADER_AUTH } from './../constants/authoriz';
import { middleWareFetch } from './middleWareFetch';

const sidValue = "11helsfokhm2d475ennf4em1p1"

const dispatch = (data) => {
    // console.log("Test middleWareFetch. dispatch data ", data);
    expect(data.type).toMatch('_');
    return;
}

test('"middleWareFetch" request GET, complete => ', async () => {

    const sidAndTime = { sid: sidValue, timeStamp: 13456789 };//SID - imitation
    const json = '{"status":1,"result":"' + sidValue + '"}';

    fetch.mockReturnValue(Promise.resolve(new Response(json)));

    const data = await middleWareFetch(URL_GET_CATEGORY, null, sidAndTime, dispatch);
    // console.log("Test middleWareFetch. data", data);

    expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY + sidAndTime.sid);
    expect(data.status).toBe(1);
});


test ('"middleWareFetch" request POST, complete => ', async () => {


    const sidAndTime = { sid: sidValue, timeStamp: new Date().getTime() };//SID - imitation
    const json = '{"status":1,"result": "' + sidAndTime.sid + '"}';
    fetch.mockReturnValue(Promise.resolve(new Response(json)));

    const data = await middleWareFetch(URL_POST_AUTH, REQUEST_HEADER_AUTH, sidAndTime, dispatch);
    // console.log("Test middleWareFetch. data", data);

    // expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_POST_AUTH + sidAndTime.sid, REQUEST_HEADER_AUTH);
    expect(data.status).toBe(1);
});


test('"middleWareFetch" Error N5: Session identifier is outdate => ', async () => {

    const sidAndTime = { sid: sidValue, timeStamp: 13456789 };//SID - imitation
    const json = '{"status":0,"error_code":5, "error_message": "Session identifier is fault"}';

    fetch.mockReturnValue(Promise.resolve(new Response(json)));

    const data = await middleWareFetch(URL_GET_CATEGORY, null, sidAndTime, dispatch);
    // console.log("Test middleWareFetch. data", data);

    // expect(fetch).toHaveBeenCalledTimes(6);
    expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY + sidAndTime.sid);
    expect(data.status).toBe(0);
    expect(data.error_code).toBe(5);
    expect(data.error_message).toBe("Session identifier is fault");
});

