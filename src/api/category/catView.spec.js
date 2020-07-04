

import { getMainListCategory, getListCategory } from './catView';
import { SIGN_LEVEL_UP } from '../../constants/categoryConst';


test('"getMainListCategory" returns entry level categories (parentID=1). => ', () => {

    let entryList = [{ parentID: 3 }, { parentID: 1 }, { parentID: 1 }];

    let outList = [{ parentID: 1 }, { parentID: 1 }];

    let data = getMainListCategory(entryList);
    console.log("getMainListCategory", data);
    expect(data).toMatchObject(outList);
});

test('"getListCategory" (getUpperListCategory) returns view upper list category (parentID = 1 ). => ', 
() => {

    let entryList =
        [{ categoryID: 0, parentID: 1181, isChildren: false, realcat: 0, name: SIGN_LEVEL_UP },
        { categoryID: 1181, parentID: 1, isChildren: false, realcat: 0, name: "Ноутбуки" },
        { categoryID: 1211, parentID: 1183, isChildren: false, realcat: 0, name: "Аксессуары для ноутбуков" }];

    let outList =
        [{ categoryID: 1181, parentID: 1, isChildren: false, realcat: 0, name: "Ноутбуки" }];

    let data = getListCategory(entryList, entryList[0]);
    console.log("getListCategory", data);
    expect(data).toMatchObject(outList);
});

test('"getListCategory" (getUpperListCategory) returns view upper list category (parentID != 1). => ', 
() => {

    let entryList =
        [{ categoryID: 0, parentID: 1181, isChildren: false, realcat: 0, name: SIGN_LEVEL_UP },
        { categoryID: 1181, parentID: 1182, isChildren: false, realcat: 0, name: "Ноутбуки" },
        { categoryID: 1211, parentID: 1183, isChildren: false, realcat: 0, name: "Аксессуары для ноутбуков" }];

    let outList =
        [{ categoryID: 0, parentID: 1182, isChildren: false, realcat: 0, name: "<" },
        { categoryID: 1181, parentID: 1182, isChildren: false, realcat: 0, name: "Ноутбуки" }];
    // { categoryID: 1191, parentID: 1181, isChildren: false, realcat: 0, name: "Ноутбуки" },
    // { categoryID: 1211, parentID: 1181, isChildren: false, realcat: 0, name: "Аксессуары для ноутбуков" }];

    let data = getListCategory(entryList, entryList[0]);
    console.log("getListCategory", data);
    expect(data).toMatchObject(outList);
});


test('"getListCategory (getUnderListCategory)" returns view list category (isChildren = true). => ', () => {

    let entryList =
        [{ categoryID: 1181, parentID: 1, isChildren: true, realcat: 0, name: "Ноутбуки, планшеты" },
        { categoryID: 1191, parentID: 1181, isChildren: false, realcat: 0, name: "Ноутбуки" },
        { categoryID: 1211, parentID: 1183, isChildren: false, realcat: 0, name: "Аксессуары для ноутбуков" }];

    let outList =
        [{ categoryID: 0, parentID: 1181, isChildren: false, realcat: 0, name: SIGN_LEVEL_UP },
        { categoryID: 1191, parentID: 1181, isChildren: false, realcat: 0, name: "Ноутбуки" }];

    let data = getListCategory(entryList, entryList[0]);
    console.log("test getListCategory", data);
    expect(data).toMatchObject(outList);
});

test('"getListCategory" returns view list category  (isChildren = false && selectItem.name != SIGN_LEVEL_UP). => ',
    () => {
        let entryList =
            [{ categoryID: 1181, parentID: 1, isChildren: false, realcat: 0, name: "Ноутбуки, планшеты" },
            { categoryID: 1191, parentID: 1181, isChildren: false, realcat: 0, name: "Ноутбуки" },
            { categoryID: 1211, parentID: 1181, isChildren: false, realcat: 0, name: "Аксессуары для ноутбуков" }];

        let data = getListCategory(entryList, entryList[0]);
        console.log("getListCategory", data);
        expect(data).toBe(false);
    });


// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test
