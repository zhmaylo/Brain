
jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { getSid } from './sid';
import { PROXY_URL_PC, URL_GET_AUTH } from '../constants/url';
import { USER_AUTH } from '../constants/authoriz';

const requestHeader = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: USER_AUTH
};
const requestUrl = PROXY_URL_PC + URL_GET_AUTH;

test('"getSid" receiving SID complete  => ', async () => {
  //\u0065\u0065 = ee
  const json = '{"status":1,"result":2}';

  fetch.mockReturnValue(Promise.resolve(new Response(json)));

  const data = await getSid();
  
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(requestUrl, requestHeader);
  expect(data.status).toBe(1);

});


test('"getSid" receiving SID error  => ', async () => {
  //\u0065\u0065 = ee
  const json = '{"status:1,"result":2}';

  fetch.mockReturnValue(Promise.resolve(new Response(json)));

  const e = await getSid();
  
  expect(fetch).toHaveBeenCalledTimes(2);
  expect(fetch).toHaveBeenCalledWith(requestUrl, requestHeader);
  expect(e.message).toMatch('invalid');
  
});

test('"getSid" callback "dispatch" testing => ', async (done) => {

  const payload = '{"status":1,"result":2}';
    fetch.mockReturnValue(Promise.resolve(new Response(payload)));
  
  function dispatch (data){
    // console.log("Test getSid callback. data", data)
    expect(data.type ).toBe('SESSION_SID');
    expect(data.payload.status ).toBe(1);
    expect(data.payload.result ).toBe(2);
    done();
  }
   await getSid (dispatch);
})


// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test

