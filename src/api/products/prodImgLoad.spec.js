import { prodImgLoad } from "./prodImgLoad";
import { PROXY_URL_PC, URL_GET_PROD_IMG } from "../../constants/urlConst";

// import fetch from 'node-fetch';
jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

const dispatch = (data) => {
    expect(data.type).toMatch('_');
    return;
}

describe('prodImgLoad - returns product image from server. JSON-format. ', () => {
    
    test('prodImgLoad -  ', async () => {
        let json =  '{"result": {"full_image": "http://brain.com.ua/images/no-photo-api.png"}}';
        let sidAndTime = { sid: "1", timeStamp: "1" };

        fetch.mockReturnValue(Promise.resolve(new Response(json)));
        let catId = 1235;
        let outdata = await prodImgLoad (catId, sidAndTime, dispatch);
        console.log('🚀 ~ file: prodImgLoad.spec.js ~ line 22 ~ test ~ outdata', outdata);

        expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_PROD_IMG + catId + '/' + sidAndTime.sid);
        expect(outdata.full_image).toStrictEqual("http://brain.com.ua/images/no-photo-api.png");
        expect(outdata.full_image).toEqual("http://brain.com.ua/images/no-photo-api.png");
        expect(outdata.full_image).toBe("http://brain.com.ua/images/no-photo-api.png");
    });
});


