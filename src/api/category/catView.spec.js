

import { getMainListCategory, getUnderListCategory } from './catView';
import { SIGN_LEVEL_UP } from '../../constants/categoryConst';


test('"getMainListCategory" returns entry level categories (parentID=1). => ', () => {

    let entryList = [{ parentID: 3 }, { parentID: 1 }, { parentID: 1 }];

    let outList = [{ parentID: 1 }, { parentID: 1 }];

    let data = getMainListCategory(entryList);
    console.log("getMainListCategory", data);
    expect(data).toMatchObject(outList);
});

test('"getUnderListCategory" returns lower level categories. => ', () => {

    let entryList =
        [{ categoryID: 1181, parentID: 1, isChildren: undefined, realcat: 0, name: "Ноутбуки, планшеты" },
        { categoryID: 1191, parentID: 1181, isChildren: undefined, realcat: 0, name: "Ноутбуки" },
        { categoryID: 1211, parentID: 1181, isChildren: undefined, realcat: 0, name: "Аксессуары для ноутбуков" }];

    let outList =
        [{ categoryID: 0, parentID: 1181, isChildren: undefined, realcat: 0, name: SIGN_LEVEL_UP },
        { categoryID: 1191, parentID: 1181, isChildren: undefined, realcat: 0, name: "Ноутбуки" },
        { categoryID: 1211, parentID: 1181, isChildren: undefined, realcat: 0, name: "Аксессуары для ноутбуков" }];


    let data = getUnderListCategory(entryList, entryList[0]);
    console.log("getUnderListCategory", data);
    expect(data).toMatchObject(outList);
});


// tasca - testAsyncCallback Creates Async Callback test
// taspr - testAsyncPromise Creates Aysnc Promise test
// tasaw - testAsyncAwait Creates Async Await test
// tsnsh - testSnapShot Creates Snapshot test
// tshre - testShallowRenderer Creates Shallow Renderer test
