
jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { PROXY_URL_PC, URL_GET_CATEGORY } from '../constants/url';
import { getCategoryList } from './category';


test('"getCategoryList" receiving data from the server. => ', async () => {

    const sidValue = "11helsfokhm2d475ennf4em1p1"
    const sidAndTime = { sid: sidValue, timeStamp: 13456789 };//SID - imitation
    //   //\u0065\u0065 = ee
    const json = '{"categoryID":8013,"parentID":1,"realcat":0,"name":"ee", "status":1,"result":"' + sidValue + '"}';
    //   console.log("Test getCategoryList. json", json);
    //   // console.log("getCategoryList. sidAndStamp.sid", sidAndTime.sid);

    fetch.mockReturnValue(Promise.resolve(new Response(json)));

    function dispatch(data) {
        console.log("Test getCategoryList callback. data", data);
        expect(data.type).toMatch('_');
        return;
    }

    const data = await getCategoryList(sidAndTime, dispatch);

    console.log("Test getCategoryList. data", data);
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY + sidAndTime.sid);
    expect(data.categoryID).toBe(8013);
    expect(data.name).toBe('ee');
});

test('"getCategoryList" dispatch fail. => ', async () => {

    const sidValue = "11helsfokhm2d475ennf4em1p1"
    const sidAndTime = { sid: sidValue, timeStamp: 13456789 };//SID - imitation
    //   //\u0065\u0065 = ee
    const json = '{"categoryID":8013,"parentID":1,"realcat":0,"name":"ee", "status":1,"result":"' + sidValue + '"}';
    //   console.log("Test getCategoryList. json", json);
    //   // console.log("getCategoryList. sidAndStamp.sid", sidAndTime.sid);

    fetch.mockReturnValue(Promise.resolve(new Response(json)));

    const data = await getCategoryList(sidAndTime, null);

    console.log("Test getCategoryList. dipatch data", data);
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY + sidAndTime.sid);
    expect(data.categoryID).toBe(8013);
    expect(data.name).toBe('ee');
});


// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test
