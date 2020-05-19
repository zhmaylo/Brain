jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { fetchData, middleWareFetch, getStatusResponse } from './fetchData';
import { URL_GET_AUTH, PROXY_URL_PC, URL_GET_CATEGORY } from './../constants/url';
import { USER_AUTH } from '../constants/authoriz';
import { REQUEST_HEADER_AUTH } from './../constants/authoriz';


test ('"getStatusResponse - return error', () => {
  json = {"status":0,"error_code":5,"error_message":"Session identifier is outdate"}
  outdata = getStatusResponse(json);
  expect(outdata.code).toBe(5);
});

test ('"getStatusResponse - return error', () => {
  json = {"status":0,"error_code":1,"error_message":"Login is required parameter	"}
  outdata = getStatusResponse(json);
  expect(outdata.code).toBe(1);
});

test ('"getStatusResponse - return No error', () => {
  json = {"status":1};
  outdata = getStatusResponse(json);
  expect(outdata.code).toBe(-1);
});


const dispatch = (data) => {
  // console.log("Test middleWareFetch. dispatch data ", data);
  expect(data.type).toMatch('_');
  return;
}

const sidValue = "11helsfokhm2d475ennf4em1p1"

test('"middleWareFetch" request GET, complete => ', async () => {
 
  const sidAndTime = { sid: sidValue, timeStamp: 13456789};//SID - imitation
  const json = '{"status":1,"result":"' + sidValue + '"}';

  fetch.mockReturnValue(Promise.resolve(new Response(json)));
 
  const data = await middleWareFetch(URL_GET_CATEGORY, null, sidAndTime, dispatch);
  // console.log("Test middleWareFetch. data", data);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY + sidAndTime.sid);
  expect(data.status).toBe(1);
});


test('"middleWareFetch" request POST, complete => ', async () => {


  const sidAndTime = { sid: sidValue, timeStamp: new Date().getTime()};//SID - imitation
  const json = '{"status":1,"result":2}';
  fetch.mockReturnValue(Promise.resolve(new Response(json)));

  const data = await middleWareFetch(URL_GET_AUTH, REQUEST_HEADER_AUTH, sidAndTime, dispatch);
  // console.log("Test middleWareFetch. data", data);

  // expect(fetch).toHaveBeenCalledTimes(2);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_AUTH+sidAndTime.sid, REQUEST_HEADER_AUTH);
  expect(data.status).toBe(1);
});


test('"middleWareFetch" Error N5: Session identifier is outdate => ', async () => {
 
  const sidAndTime = { sid: sidValue, timeStamp: 13456789};//SID - imitation
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

describe

test('"fetchData" request POST complete => ', async () => {

  const json = '{"status":1,"result":2}';
  const requestHeader = { method: 'POST', 
      headers: {'Content-Type': 'application/x-www-form-urlencoded' },
    body: USER_AUTH
  };
  fetch.mockReturnValue(Promise.resolve(new Response(json)));

  const data = await fetchData(URL_GET_AUTH, requestHeader);

  // expect(fetch).toHaveBeenCalledTimes(7);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_AUTH, requestHeader );
  expect(data.status).toBe(1);
});


test('"fetchData" request GET complete => ', async () => {

  const json = '{"status":1,"result":2}';
  fetch.mockReturnValue(Promise.resolve(new Response(json)));

  const data = await fetchData(URL_GET_CATEGORY);

  // expect(fetch).toHaveBeenCalledTimes(8);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY);
  expect(data.status).toBe(1);
});


test('"fetchData" request GET error => ', async () => {

  const json = '{"status:1,"result":2}';
  fetch.mockReturnValue(Promise.resolve(new Response(json)));

  const e = await fetchData(URL_GET_CATEGORY);

  // expect(fetch).toHaveBeenCalledTimes(9);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY);
  // console.log("Test fetchData. e.message", e.message);
  expect(e.message).toMatch('invalid');
});



