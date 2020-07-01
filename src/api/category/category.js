
import { URL_GET_CATEGORY } from '../../constants/urlConst';
import { middleWareFetch } from './../fetch/middleWareFetch';
import { setFieldIsChildren } from './symbChildren';


// getCategoryList - returns categorry list from server. JSON-format.
// sidAndTime - session SID and TimeStamp 
// dispatch - this is callback
export const getCategoryList = async (sidAndTime, dispatch) => {

    // console.log("getCategoryList. sidAndTime => ", sidAndTime)
    let json = await middleWareFetch(URL_GET_CATEGORY, null, sidAndTime, dispatch);
    json = json.result;
    // console.log("getCategoryList=>", json);


    return json;
}

// addFieldChildren - creates a new array and add to him "categoryJSON"  with field "isChildren".
//                    Returns a new array.
// categoryJSON - full list category in format JSON
export const addFieldChildren = (categoryJSON) => {
    let arrListaddField = [];
    let itemList = {
        categoryID: 0, parentID: 0,
        isChildren: undefined, //field which add
        realcat: 0, name: ""
    };
    // console.log("addFieldChildren.categoryJSON", categoryJSON);

    // if (typeof categoryJSON === 'undefined') { return [] };

    categoryJSON.forEach(function (item, index, array) {
        itemList.categoryID = item.categoryID;
        itemList.parentID = item.parentID;
        itemList.realcat = item.realcat;
        itemList.name = item.name;
        arrListaddField[index] = { ...itemList };
    })

    // console.log("arrListaddField", arrListaddField[0]);
    return arrListaddField;
}

// getMainListCategory - returns entry level categories
// categoryJSON - full list category in format JSON
export const getMainListCategory = (categoryJSON) => {
    // console.log("getMainListCategory categoryJSON", categoryJSON);
    let arrMainListCategory = getUnderListCategory(categoryJSON, 1);
    return arrMainListCategory;
}

// getUnderListCategory - returns lower level categories
// categoryJSON - full list category in format JSON
// selectItem - selected parent item  
export const getUnderListCategory = (categoryJSON, selectItem) => {
    // console.log("getMainListCategory categoryJSON", categoryJSON);
    let selectParentID = selectItem;
    if (typeof (selectItem) == "object") {
        selectParentID = selectItem.categoryID;
        (selectItem.realcat !== 0) && (selectParentID = selectItem.realcat);
    }
    let arrUnderListCategory = categoryJSON.filter(item => item.parentID == selectParentID);
    return arrUnderListCategory;
}


