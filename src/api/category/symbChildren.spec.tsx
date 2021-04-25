
import { setFieldIsChildren, isUndef } from './symbChildren';

test('"setFieldIsChildren" set field "isChildren" to "true" or "false". => ', () => {
    let categoryList = [
        { categoryID: 7271, parentID: 1, isChildren: undefined, realcat: 0, name: "Услуги" },
        { categoryID: 8250, parentID: 1, isChildren: undefined, realcat: 0, name: "Новые классы" },
        { categoryID: 7914, parentID: 7271, isChildren: undefined, realcat: 0, name: "Защита" }];

    let catList = setFieldIsChildren(categoryList);
    console.log("Test getCategoryList. catList", catList);
    // console.log("Test getCategoryList. dipatch data", data);
    expect(catList[0].isChildren).toBe(true);
    expect(catList[1].isChildren).toBe(false);
    expect(catList[2].isChildren).toBe(false);
});
test('"setFieldIsChildren" set field "isChildren" to "true" or "false". => ', () => {
    let categoryList = [
        { categoryID: 7271, parentID: 1, isChildren: true, realcat: 0, name: "Услуги" },
        { categoryID: 8250, parentID: 1, isChildren: false, realcat: 0, name: "Новые классы" },
        { categoryID: 7914, parentID: 7271, isChildren: false, realcat: 0, name: "Защита" }];

    let catList = setFieldIsChildren(categoryList);
    console.log("Test getCategoryList. catList", catList);
    // console.log("Test getCategoryList. dipatch data", data);
    expect(catList[0].isChildren).toBe(true);
    expect(catList[1].isChildren).toBe(false);
    expect(catList[2].isChildren).toBe(false);
});

