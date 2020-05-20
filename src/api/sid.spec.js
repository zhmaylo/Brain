
jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { getSid } from './sid';
import { PROXY_URL_PC, URL_GET_AUTH } from '../constants/url';
import { REQUEST_HEADER_AUTH } from './../constants/authoriz';

const requestUrl = PROXY_URL_PC + URL_GET_AUTH;

// test('"getSid" receiving SID error  => ', async () => {

//   const json = '{"status":0,"result":2}';
//   fetch.mockReturnValue(Promise.resolve(new Response(json)));

//   const data = await getSid(null);
//   // console.log("Test getSid. data", data);
//   expect(fetch).toHaveBeenCalledTimes(1);
//   expect(fetch).toHaveBeenCalledWith(requestUrl, REQUEST_HEADER_AUTH);
//   expect(data.timeStamp).toBe(null);

// });

test('"getSid" callback "dispatch" testing. Reciving SID complete => ',
  async (done) => {

    const payload = '{"status":1,"result":2345}';
    fetch.mockReturnValue(Promise.resolve(new Response(payload)));

    function dispatch(data) {
      console.log("Test getSid callback. data", data)
      //testing callback dispatch
      expect(data.type).toBe('SESSION_SID');
      //testing get from the server session SID 
      expect(data.payload.sid).toBe(2345);
      //testing timeStamp
      expect(data.payload.timeStamp).toBeGreaterThan(1589544323784);
      done();
    }
    await getSid(dispatch);
  })


// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test

