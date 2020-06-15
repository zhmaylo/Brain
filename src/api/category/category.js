
import { URL_GET_CATEGORY } from '../../constants/urlConst';
import { middleWareFetch } from './../fetch/middleWareFetch';





// getCategoryList - returns categorry list from server. JSON-format.
// dispatch - this is callback


export const getCategoryList = async (sidAndTime, dispatch) => {

    let json = 0;
    // console.log("getCategoryList. sidAndTime => ", sidAndTime)
    json = await middleWareFetch(URL_GET_CATEGORY, null, sidAndTime, dispatch);
    console.log("getCategoryList=>", json);
    console.log("eeeey");
    (json.status == 1) && (dispatch({ type: 'CATEGORY_LIST', payload: json }));
    return json;
}

// getMainListCategory - returns entry level categories
// categoryJSON - full list category in format JSON
// 
export const getMainListCategory = (categoryJSON) => {
    let arrFilt = categoryJSON.filter (item => item.parentID == 1);
    getNormalizeList(categoryList);
    
    return arrFilt;
}

// 

/////////////////////////////
// Start. Functions group to normalize the list of categories
//

export const getNormalizeList = (categoryList) => {
    let categoryWithChildrenID = addFieldChildren(categoryList);
    categoryList = {... setValueChildrenID(categoryWithChildrenID)};
    return categoryList;
}

export const setValueChildrenID = (categoryWithChildrenID) => {
    categoryWithChildrenID.forEach ( function (item, index, array) {
        console.log("setValueChildrenID 1", item.isChildren )
        item.isChildren = isItemHaveChildren(categoryWithChildrenID, item.categoryID);
        console.log("setValueChildrenID 2", item.isChildren )
    })
    return categoryWithChildrenID;
} 


export const isItemHaveChildren = (categoryList, categoryID_UP) => {
    let arrTemp = categoryList.filter(function(item, index, array) {
        item.realcat === categoryID_UP });
    if (arrTemp.length > 0) return true;

    arrTemp = categoryList.filter(function(item, index, array) {
        item.parentID === categoryID_UP });
    if (arrTemp.length > 0) return true;
    return false;

    
    // categoryList.forEach(function (item, index, array){
    //     if (item.realcat > 0) upId = item.realcat;
    //         else upID = item.categoryID; 
    //     categoryList.forEach (function (item, index, array){
    //         if (item.parrentID === upID) return true;
    //     })
    
    // })
    // return false;
}

// addFieldChildren - creates a new array and add to him "categoryJSON"  with field "ChildrenID".
//                    Returns a new array.
// categoryJSON - full list category in format JSON
export const addFieldChildren = (categoryJSON) => {
    let arrListaddField = [];
    let itemList = {categoryID : 0, parentID : 0, isChildren : 0, realcat : 0, name : ""} ;

    categoryJSON.forEach(function (item, index, array) {
        itemList.categoryID = item.categoryID; 
        itemList.parentID = item.parentID;
        itemList.realcat = item.realcat;
        itemList.name = item.name ;
        arrListaddField[index] = {... itemList} ;
    })

    return arrListaddField;
}

// End. Functions group to normalize the list of categories
/////////////////////////////

export const getUpListCategory = () => {

}

export const getDownListCategory = () => {

}
