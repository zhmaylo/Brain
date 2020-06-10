jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { fetchData } from './fetchData';
import { URL_POST_AUTH, PROXY_URL_PC, URL_GET_CATEGORY } from '../../constants/urlConst';
import { USER_AUTH } from '../../constants/authorizConst';
import { getStatusResponse } from './middleWareFetch';

test('"getStatusResponse - return error', () => {
  json = { "status": 0, "error_code": 5, "error_message": "Session identifier is outdate" }
  outdata = getStatusResponse(json);
  expect(outdata.code).toBe(5);
});

test('"getStatusResponse - return error', () => {
  json = { "status": 0, "error_code": 1, "error_message": "Login is required parameter	" }
  outdata = getStatusResponse(json);
  expect(outdata.code).toBe(1);
});

test('"getStatusResponse - return No error', () => {
  json = { "status": 1 };
  outdata = getStatusResponse(json);
  expect(outdata.code).toBe(-1);
});

test('"fetchData" request POST complete => ', async () => {

  const json = '{"status":1,"result":2}';
  const requestHeader = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: USER_AUTH
  };
  fetch.mockReturnValue(Promise.resolve(new Response(json)));

  const data = await fetchData(URL_POST_AUTH, requestHeader);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_POST_AUTH, requestHeader);
  expect(data.status).toBe(1);
});


test('"fetchData" request GET complete => ', async () => {

  const json = '{"status":1,"result":2}';
  fetch.mockReturnValue(Promise.resolve(new Response(json)));

  const data = await fetchData(URL_GET_CATEGORY);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY);
  expect(data.status).toBe(1);
});


test('"fetchData" request GET error => ', async () => {

  const json = '{"status:1,"result":2}';
  fetch.mockReturnValue(Promise.resolve(new Response(json)));

  const e = await fetchData(URL_GET_CATEGORY);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY);
  // console.log("Test fetchData. e.message", e.message);
  expect(e.message).toMatch('invalid');
});



