
import { setFieldIsChildren, isUndef } from './symbChildren';

test('"setFieldIsChildren" set field "isChildren" to "true" or "false". => ', () => {
    let categoryList = [
        { categoryID: 7271, parentID: 1, isChildren: undefined, realcat: 0, name: "Услуги" },
        { categoryID: 8250, parentID: 1, isChildren: undefined, realcat: 0, name: "Новые классы" },
        { categoryID: 7914, parentID: 7271, isChildren: undefined, realcat: 0, name: "Защита" }];

    let catList = setFieldIsChildren(categoryList)
    // console.log("Test getCategoryList. dipatch data", data);
    expect(categoryList[0].isChildren).toBe(true);
    expect(categoryList[1].isChildren).toBe(false);
    expect(categoryList[2].isChildren).toBe(false);
});

test.only('"isUndef" checks the incoming list "arrFilt" for the value "undefined". => ', () => {
    // return "true" - values "undefined" found, 
    // return "undefined" - values "undefined" NOT found
    let arrList1 = [
        { categoryID: 7271, parentID: 1, isChildren: true, realcat: 0, name: "Услуги" },
        { categoryID: 8250, parentID: 1, isChildren: false, realcat: 0, name: "Новые классы" },
        { categoryID: 7914, parentID: 7271, isChildren: undefined, realcat: 0, name: "Защита" }];

    let arrList2 = [
        { categoryID: 7271, parentID: 1, isChildren: true, realcat: 0, name: "Услуги" },
        { categoryID: 8250, parentID: 1, isChildren: false, realcat: 0, name: "Новые классы" },
        { categoryID: 7914, parentID: 7271, isChildren: false, realcat: 0, name: "Защита" }];

    let arrL = isUndef(arrList1);
    console.log("isUndef.arrL", arrL);
    expect(arrL).toBe(true);
    expect(isUndef(arrList2)).toBe(flase);
});