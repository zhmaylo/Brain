
jest.mock('node-fetch');
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');

import { PROXY_URL_PC, URL_GET_CATEGORY }  from '../../constants/urlConst';
import { getCategoryList, addFieldChildren, getMainListCategory } from './category';

function dispatch(data) {
    // console.log("Test getCategoryList callback. data", data);
    expect(data.type).toMatch('_');
    return;
}

test('"getCategoryList" receiving data from the server. => ', async () => {

    const sidValue = "11helsfokhm2d475ennf4em1p1"
    const sidAndTime = { sid: sidValue, timeStamp: 13456789 };//SID - imitation
    //   //\u0065\u0065 = ee
    const json = '{"categoryID":8013,"parentID":1,"realcat":0,"name":"ee", "status":1,"result":"' + sidValue + '"}';
    //   console.log("Test getCategoryList. json", json);
    //   // console.log("getCategoryList. sidAndStamp.sid", sidAndTime.sid);

    fetch.mockReturnValue(Promise.resolve(new Response(json)));

    const data = await getCategoryList(sidAndTime, dispatch);

    // console.log("Test getCategoryList. data", data);
    expect(fetch).toHaveBeenCalledWith(PROXY_URL_PC + URL_GET_CATEGORY + sidAndTime.sid);
    expect(data.categoryID).toBe(8013);
    expect(data.name).toBe('ee');
});

let baseList = [
    {categoryID: 1181, parentID: 3, childrenFlag : 0, realcat: 10, name: "Ноутбуки, планшеты"},
    {categoryID: 1331, parentID: 1, childrenFlag : 0, realcat: 30, name: "Компьютеры, аксессуары"},
    {categoryID: 1330, parentID: 1, childrenFlag : 0, realcat: 50, name: "Комплектующие для ПК"},
    {categoryID: 1513, parentID: 2, childrenFlag : 0, realcat: 0, name: "ТВ, Аудио, Видео, Фото"},
    {categoryID: 1266, parentID: 1, childrenFlag : 0, realcat: 60, name: "Смартфоны, связь, навигация"},
    {categoryID: 1378, parentID: 6, childrenFlag : 0, realcat: 0, name: "Периферия, оргтехника"},
];


test('"getMainListCategory" returns entry level categories (parentID=1). => ', () => {
    
    let entryList = baseList;
    
    let outList = [
        {categoryID: 1331, parentID: 1, childrenFlag : 0, realcat: 30, name: "Компьютеры, аксессуары"},
        {categoryID: 1330, parentID: 1, childrenFlag : 0, realcat: 50, name: "Комплектующие для ПК"},
        {categoryID: 1266, parentID: 1, childrenFlag : 0, realcat: 60, name: "Смартфоны, связь, навигация"},
    ];
    let data = getMainListCategory(entryList);
    console.log("getMainListCategory", data);
    expect(data).toMatchObject(outList);
});

test('"addFieldChildren" creates a new array and add to him with field "childrenFlag". Returns a new array.. => ', () => {
    
    let ListWithoutchildrenFlag = [
        {categoryID: 1181, parentID: 3, realcat: 10, name: "Ноутбуки, планшеты"},
        {categoryID: 1331, parentID: 1, realcat: 30, name: "Компьютеры, аксессуары"},
        {categoryID: 1330, parentID: 1, realcat: 50, name: "Комплектующие для ПК"},
        {categoryID: 1513, parentID: 2, realcat: 0, name: "ТВ, Аудио, Видео, Фото"},
        {categoryID: 1266, parentID: 1, realcat: 60, name: "Смартфоны, связь, навигация"},
        {categoryID: 1378, parentID: 6, realcat: 0, name: "Периферия, оргтехника"}
    ];
    
    let listWitnchildrenFlag = {...baseList}
        
    let data = addFieldChildren(ListWithoutchildrenFlag);
    console.log("addFieldChildren", data);
    expect(data).toMatchObject(listWitnchildrenFlag);
});

// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test