jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { fetchData, middleWareFetch } from './fetchData';
import { URL_GET_AUTH, PROXY_URL_PC, URL_GET_CATEGORY } from './../constants/url';
import { USER_AUTH } from '../constants/authoriz';




test('"middleWareFetch" response POST/GET, update timeStamp, complete => ', async () => {

  const sidValue = "11helsfokhm2d475ennf4em1p1"
  const sidAndTime = { sid: sidValue, timeStamp: 13456789};//SID - imitation
  const json = '{"status":1,"result":"' + sidValue + '"}';

  fetch.mockReturnValue(Promise.resolve(new Response(json)));

  const dispatch = (data) => {
    console.log("Test middleWareFetch. dispatch data ", data);
    return;
  }

  const data = await middleWareFetch(URL_GET_CATEGORY, null, sidAndTime, dispatch);
  console.log("Test middleWareFetch. data", data);

  expect(fetch).toHaveBeenCalledTimes(2);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY + sidAndTime.sid);
  expect(data.status).toBe(1);
});


test('"fetchData" response POST complete => ', async () => {

  const json = '{"status":1,"result":2}';
  const requestHeader = { method: 'POST', 
      headers: {'Content-Type': 'application/x-www-form-urlencoded' },
    body: USER_AUTH
  };
  fetch.mockReturnValue(Promise.resolve(new Response(json)));

  const data = await fetchData(URL_GET_AUTH, requestHeader);

  expect(fetch).toHaveBeenCalledTimes(3);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_AUTH, requestHeader );
  expect(data.status).toBe(1);
});


test('"fetchData" response GET complete => ', async () => {

  const json = '{"status":1,"result":2}';
  fetch.mockReturnValue(Promise.resolve(new Response(json)));

  const data = await fetchData(URL_GET_CATEGORY);

  expect(fetch).toHaveBeenCalledTimes(4);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY);
  expect(data.status).toBe(1);
});


test('"fetchData" response GET error => ', async () => {

  const json = '{"status:1,"result":2}';
  fetch.mockReturnValue(Promise.resolve(new Response(json)));

  const e = await fetchData(URL_GET_CATEGORY);

  expect(fetch).toHaveBeenCalledTimes(5);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY);
  console.log("Test fetchData. e.message", e.message);
  expect(e.message).toMatch('invalid');
});




// {"status":1,"result":[{
// "categoryID":1181,"parentID":1,"realcat":0,
// "name":"\u041d\u043e\u0443\u0442\u0431\u0443\u043a\u0438,
//        \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u044b"},
// {"categoryID":1331,"parentID":1,"realcat":0,
// "name":"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u044b, 
//         \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b"}]}