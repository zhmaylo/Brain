
jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { getSid } from './api';
import { PROXY_URL_PC, URL_GET_AUTH } from '../constants/url';
import { USER_AUTH } from './../constants/authoriz';


  test('"getSid" receiving data from the server. => ', async () => {
    fetch.mockReturnValue(Promise.resolve(new Response('123456789')));

  const data = await getSid();
  
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_AUTH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: USER_AUTH
  });
  expect(data).toBe(123456789);
})

// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test

