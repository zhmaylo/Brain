
jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { PROXY_URL_PC, URL_GET_CATEGORY } from '../../constants/urlConst';
import { getCategoryList, addFieldChildren, sortListbyName } from './category';
import { SIGN_LEVEL_UP } from '../../constants/categoryConst';

function dispatch(data) {
    // console.log("Test getCategoryList callback. data", data);
    expect(data.type).toMatch('_');
    return;
}

test('"getCategoryList" receiving data from the server. => ', async () => {

    const sidValue = "11helsfokhm2d475ennf4em1p1"
    const sidAndTime = { sid: sidValue, timeStamp: 13456789 };//SID - imitation
    //   //\u0065\u0065 = ee
    let json = '{ "result" : [{ "categoryID": 8013, "parentID": 1, "realcat": 0, "name": "ee" }], "status": "1" }';
    console.log("Test getCategoryList. json", json);
    // console.log("getCategoryList. sidAndStamp.sid", sidAndTime.sid);

    fetch.mockReturnValue(Promise.resolve(new Response(json)));

    const data = await getCategoryList(sidAndTime, dispatch);

    // console.log("Test getCategoryList. data", data);
    console.log("Test getCategoryList. data[0].categoryID", data[0].categoryID);
    // console.log("Test getCategoryList. data[0].name", data[0].name);
    expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY + sidAndTime.sid);
    expect(data[0].categoryID).toBe(8013);
    expect(data[0].name).toBe('ee');
});

test('"sortListbyName" sort the list by "name" ascending. => ', () => {
    let listIn =
        [{ categoryID: 1181, parentID: 3, isChildren: true, realcat: 10, name: "Ноутбуки, планшеты" },
        { categoryID: 1331, parentID: 1, isChildren: true, realcat: 30, name: "SSD диски" },
        { categoryID: 1330, parentID: 1, isChildren: false, realcat: 50, name: "А комплектующие для ПК" },
        { categoryID: 7811, parentID: 1331, isChildren: undefined, realcat: 0, name: "Электрооборудование" },
        { categoryID: 7811, parentID: 1331, isChildren: undefined, realcat: 0, name: "Электрооборудование" }
        ];
    let listOut = [
        { categoryID: 1331, parentID: 1, isChildren: true, realcat: 30, name: "SSD диски" },
        { categoryID: 1330, parentID: 1, isChildren: false, realcat: 50, name: "А комплектующие для ПК" },
        { categoryID: 1181, parentID: 3, isChildren: true, realcat: 10, name: "Ноутбуки, планшеты" },
        
        { categoryID: 7811, parentID: 1331, isChildren: undefined, realcat: 0, name: "Электрооборудование" },
        { categoryID: 7811, parentID: 1331, isChildren: undefined, realcat: 0, name: "Электрооборудование" }
    ];
    let data = sortListbyName(listIn);
    expect(data).toMatchObject(listOut);
});



test('"addFieldIsChildren" creates a new array and add to him with field "isChildren". Returns a new array.. => ', () => {

    let listWithOutIsChildren =
        [{ categoryID: 1181, parentID: 3, realcat: 10, name: "Ноутбуки, планшеты" },
        { categoryID: 1331, parentID: 1, realcat: 30, name: "Компьютеры, аксессуары" },
        { categoryID: 1330, parentID: 1, realcat: 50, name: "Комплектующие для ПК" }];

    let listWithIsChildren = {
        "0": { categoryID: 1181, parentID: 3, isChildren: undefined, realcat: 10, name: "Ноутбуки, планшеты" },
        "1": { categoryID: 1331, parentID: 1, isChildren: undefined, realcat: 30, name: "Компьютеры, аксессуары" },
        "2": { categoryID: 1330, parentID: 1, isChildren: undefined, realcat: 50, name: "Комплектующие для ПК" }
    };

    // let listWithIsChildren = {...baseList}
    let data = addFieldChildren(listWithOutIsChildren);
    console.log("addFieldChildren", data);
    expect(data).toMatchObject(listWithIsChildren);
});

// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test
