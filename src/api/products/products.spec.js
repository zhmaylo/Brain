import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// import fetch from 'node-fetch';
jest.mock('node-fetch');
const { Response } = jest.requireActual('node-fetch');

import { getProductsList, removeProductAbsence, storeOffset } from './products';
// import { PROXY_URL_PC, URL_GET_PRODUCTS } from '../../constants/urlConst';
// import { PRODUCTS_FROM_FILE } from '../../constants/productsJSON';
import { SYNC_OFFSET_KEY } from '../../constants/storageConst';

const dispatch = (data) => {
    // console.log("Test 'getProductsList'. dispatch data ", data);
    expect(data.type).toMatch('_');
    return;
}

test('"getProductsList" returns products list of a specified category from server. JSON-format. => ',
    async () => {
        let sidAndTime = { sid: "11helsfokhm2d475ennf4em1p1", timeStamp: "1234567890123456789" };

        // console.log('json2.result.list[0] => ', json2);

        let listOut = [{
            "result": {
                "list": [
                    { "categoryID": "1235", "name": "120GB Kingston (SV300S37A 120G)" },
                    { "categoryID": "1235", "name": "240GB PNY SSD (SSD9SC240GEDA-PB)" }
                ]
            }
        }];

        // console.log('Test getProductsList. result', json.result.list[0] );

        // let data;
        storeOffset(SYNC_OFFSET_KEY, 0);

        // fetch.mockReturnValue(Promise.resolve(new Response(json)));
        getProductsList(1235, sidAndTime, dispatch, false).then((productsList) => {
            let data = productsList;
            console.log('data=>', data);
            expect(data).toMatchObject(listOut);
        })

        // expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_PRODUCTS +
        //     '1235/11helsfokhm2d475ennf4em1p1?offset=0&limit=1000');

    });

test('removeProductAbsence - remove product absence ', () => {
    let json = [{
        "status": 1,
        "result": {
            "list": [
                {
                    "categoryID": "1235",
                    "name": "120GB Kingston (SV300S37A 120G)",
                    "stocks_expected": {
                        "19": "2020-07-24 09:00:00",
                        "29": "2020-07-22 15:00:00",
                        "1002": "2020-07-21 20:00:00"
                    },
                    "available": { "1": 3 },
                },
                {
                    "categoryID": "3235",
                    "name": "120GB Silicon Power (SP120GBSS3V60S25)",
                    "stocks_expected": {
                        "121": "2020-07-22 18:00:00",
                        "144": "2020-07-22 17:30:00",
                        "168": "2020-07-22 16:30:00"
                    },
                    "available": { "1": 3 },
                },
                {
                    "categoryID": "1235",
                    "name": "240GB PNY SSD (SSD9SC240GEDA-PB)",
                    "stocks_expected": [],
                    "available": [],
                }
            ],
            "count": 3
        }
    }];

    let jsonOut = [{
        "status": 1,
        "result": {
            "list": [
                {
                    "categoryID": "1235",
                    "name": "120GB Kingston (SV300S37A 120G)",
                    "stocks_expected": {
                        "19": "2020-07-24 09:00:00",
                        "29": "2020-07-22 15:00:00",
                        "1002": "2020-07-21 20:00:00"
                    },
                    "available": { "1": 3 },
                },
                {
                    "categoryID": "3235",
                    "name": "120GB Silicon Power (SP120GBSS3V60S25)",
                    "stocks_expected": {
                        "121": "2020-07-22 18:00:00",
                        "144": "2020-07-22 17:30:00",
                        "168": "2020-07-22 16:30:00"
                    },
                    "available": { "1": 3 },
                },
            ],
            "count": 3
        }
    }];

    let outdata = removeProductAbsence(json[0].result.list);
    console.log("🚀 ~ file: products.spec.js ~ line 118 ~ test ~ outdata", outdata);
    console.log("🚀 ~ file: products.spec.js ~ line 121 ~ test ~ jsonOut.result", jsonOut[0].result);
    
    expect(outdata).toStrictEqual(jsonOut[0].result.list);
    expect(outdata).toEqual(jsonOut[0].result.list);
});
