
import { URL_GET_CATEGORY } from '../../constants/urlConst';
import { middleWareFetch } from './../fetch/middleWareFetch';
import { setFieldIsChildren } from './symbChildren';


// getCategoryList - returns categorry list from server. JSON-format.
// sidAndTime - session SID and TimeStamp 
// dispatch - this is callback
export const getCategoryList = async (sidAndTime, dispatch) => {

    let json = 0;
    // console.log("getCategoryList. sidAndTime => ", sidAndTime)
    json = await middleWareFetch(URL_GET_CATEGORY, null, sidAndTime, dispatch);
     console.log("getCategoryList=>", json);
     console.log("getCategoryList>json.status", json.status)
    if (json.status == 1) {
        console.log("getCategoryList>json.status 2", json.status)
        json = addFieldChildren(json.result);
        (dispatch({ type: 'CATEGORY_LIST', payload: json}))
    };
    return json;
}

// addFieldChildren - creates a new array and add to him "categoryJSON"  with field "isChildren".
//                    Returns a new array.
// categoryJSON - full list category in format JSON
export const addFieldChildren = (categoryJSON) => {
    let arrListaddField = [];
    let itemList = { categoryID: 0, parentID: 0, isChildren: undefined, realcat: 0, name: "" };

    categoryJSON.forEach(function (item, index, array) {
        itemList.categoryID = item.categoryID;
        itemList.parentID = item.parentID;
        itemList.realcat = item.realcat;
        itemList.name = item.name;
        arrListaddField[index] = { ...itemList };
    })

    return arrListaddField;
}


// getMainListCategory - returns entry level categories
// categoryJSON - full list category in format JSON
// dispatch - this is callback
export const getMainListCategory = (categoryJSON, dispatch) => {
    let arrFilt = categoryJSON.filter(item => item.parentID == 1);
    arrFilt = setFieldIsChildren (arrFilt, categoryJSON, dispatch);
    // console.log("getMainListCategory arrFilt", arrFilt[0]);
    // console.log("getMainListCategory categoryJSON", categoryJSON[0]);
    return arrFilt;
}



export const getUpListCategory = () => {

}

export const getDownListCategory = () => {

}
