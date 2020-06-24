
import { URL_GET_CATEGORY } from '../../constants/urlConst';
import { middleWareFetch } from './../fetch/middleWareFetch';
import { setFieldIsChildren } from './symbChildren';


// getCategoryList - returns categorry list from server. JSON-format.
// sidAndTime - session SID and TimeStamp 
// dispatch - this is callback
export const getCategoryList = async (sidAndTime, dispatch) => {
   
    // console.log("getCategoryList. sidAndTime => ", sidAndTime)
    let json = await middleWareFetch(URL_GET_CATEGORY, null, sidAndTime, dispatch);
    console.log("getCategoryList=>", json);
    console.log("getCategoryList>json.status #1", json.status);

    json = addFieldChildren(json.result);
    json = setFieldIsChildren(json, json);

    return json;
}

// addFieldChildren - creates a new array and add to him "categoryJSON"  with field "isChildren".
//                    Returns a new array.
// categoryJSON - full list category in format JSON
export const addFieldChildren = (categoryJSON) => {
    let arrListaddField = [];
    let itemList = { categoryID: 0, parentID: 0, 
        isChildren: undefined, //field which add
        realcat: 0, name: "" };

    categoryJSON.forEach(function (item, index, array) {
        itemList.categoryID = item.categoryID;
        itemList.parentID = item.parentID;
        itemList.realcat = item.realcat;
        itemList.name = item.name;
        arrListaddField[index] = { ...itemList };
    })
    console.log("arrListaddField", arrListaddField[0]);
    return arrListaddField;
}


// getMainListCategory - returns entry level categories
// categoryJSON - full list category in format JSON
// dispatch - this is callback
export const getMainListCategory = (categoryJSON) => {

    let arrMainListCategory = categoryJSON.filter(item => item.parentID == 1);
    // arrMainListCategory = setFieldIsChildren(arrFilt, categoryJSON);
    // arrMainListCategory = setFieldIsChildren(categoryJSON, categoryJSON);
    // console.log("getMainListCategory arrFilt", arrFilt[0]);
    // console.log("getMainListCategory categoryJSON", categoryJSON[0]);
    return arrMainListCategory;
}



