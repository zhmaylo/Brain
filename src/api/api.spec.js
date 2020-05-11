
jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { getSid } from './api';
import { URL_GET_AUTH, USER_AUT } from '../constants';
import { PROXY_URL_PC } from './../constants/index';

test('Is return SID? Ok (1) => ', async () => {
  fetch.mockReturnValue(Promise.resolve(new Response()));

   const data = await getSid(); 

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_AUTH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: USER_AUT
    });
    console.log("SID test.data =>", data);
    expect(data).toBe(512);

 
})




// it('works with async/await', () => {
//   expect.assertions(1);
//   getSid().then (data =>{
//   console.log("getSid()=>", data);
//   expect(getSid()).toEqual("tprue");})
// });





// describe("Get SID function", () => {
//   // console.log("getSid()=>",getSid())
//   const output = "true";

//   test("Is return SID? Ok (true) ", () => {
//     // expect.assertions(1);
//     return getSid().catch(data => {
//       console.log("SID test=>", data);
//       expect(data).toEqual(output);
//     });
//   })
// });



// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test

