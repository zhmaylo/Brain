
jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { PROXY_URL_PC, URL_GET_CATEGORY } from '../constants/url';
import { getCategoryList } from './category';

test('"getCategoryList" receiving data from the server. => ', async () => {
  fetch.mockReturnValue(Promise.resolve(new Response('12345')));
  const arg="11helsfokhm2d475ennf4em1p1";
  const data = await getCategoryList(arg);
  
  // console.log("Test getCategoryList", data)
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY+arg);
  expect(data).toBe(12345);
})

// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test
