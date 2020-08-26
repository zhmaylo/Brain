
jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { getProductsList } from './products';
import { PROXY_URL_PC, URL_GET_PRODUCTS } from './../../constants/urlConst';


const dispatch = (data) => {
    // console.log("Test 'getProductsList'. dispatch data ", data);
    expect(data.type).toMatch('_');
    return;
}

test('"getProductsList" returns products list of a specified category from server. JSON-format. => ', () => {

    let sidAndTime = { sid: "11helsfokhm2d475ennf4em1p1", timeStamp: "1234567890123456789" };

    let json = [{
        "status": 1,
        "result": {
            "list": [
                { "categoryID": "1235", "name": "120GB Kingston (SV300S37A 120G)" },
                { "categoryID": "3235", "name": "120GB Silicon Power (SP120GBSS3V60S25)" },
                { "categoryID": "1235", "name": "240GB PNY SSD (SSD9SC240GEDA-PB)" }
            ],
            "count": 3
        }
    }];
    console.log('json.result.list[0] => ', json[0]);

    let listOut = [{
        "result": {
            "list": [
                { "categoryID": "1235", "name": "120GB Kingston (SV300S37A 120G)" },
                { "categoryID": "1235", "name": "240GB PNY SSD (SSD9SC240GEDA-PB)" }
            ]
        }
    }];
    
    console.log('listOut => ', listOut.result.list[0]);

    let data;

    fetch.mockReturnValue(Promise.resolve(new Response(json)));

    // let data = getProductsList(1235, sidAndTime, dispatch);
    getProductsList(1235, sidAndTime, dispatch).then((productsList) => {
        data = productsList;
        console.log('data=>', data);
        expect(data).toMatchObject(listOut);
    });
    expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_PRODUCTS + '1235/11helsfokhm2d475ennf4em1p1?offset=0&limit=1000');

});

