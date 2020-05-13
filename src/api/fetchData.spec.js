
jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { PROXY_URL_PC, URL_GET_AUTH } from '../constants/url';
import { fetchData } from './fetchData';


  test('"fetchData" responce complete. => ', async () => {
    const json = [{error_code: 2, error_message: "eeeeee"}];
    console.log("Test fetchData", json);
    fetch.mockReturnValue(Promise.resolve(new Response(json)));

  const data = await fetchData();
  
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_AUTH) ;
    
  expect(data).toBe(123);
})
