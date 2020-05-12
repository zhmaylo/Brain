
jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { getSid } from './api';
import { URL_GET_AUTH, USER_AUT } from '../constants';
import { PROXY_URL_PC } from './../constants/index';

test('Is return SID? Ok (1) => ', async () => {
  fetch.mockReturnValue(Promise.resolve(new Response('1')));

    const data = await getSid();
    //await console.log("SID test.data 1 =>", data); 
    // console.log("<<<<SID test.data ttttt =>", data);
 
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_AUTH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: USER_AUT
    });
    expect(data).toBe(1);
    
    // console.log("SID test.data 2 =>", data);
    // expect(data).toEqual(512);
})


// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test

