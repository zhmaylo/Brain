/////////////////////////////
// Start. Functions group to set value field 'isChildren' in the list of categories
//

// stIsChildren - set field 'isChildren' to "true" or "false"
// arrFilt - current category level
// categoryList - full list category in format 'Array of Objects'
// dispatch - this is callback
export const setIsChildren = (arrFilt, categoryList, dispatch) => {
    if (isCheckUndef(arrFilt)) {
        arrFilt = { ...setValueIsChildren(arrFilt, categoryList) };
        dispatch({ type: 'CATEGORY_LIST', payload: categoryList });
    };
    return arrFilt;
};

// isCheckUndef - checks for children in the category
// arrFilt - current category level
export const isCheckUndef = (arrFilt) => {
    let arrTemp = arrFilt.find(item => item.isChildren == undefined);
    return arrTemp; //true - item found, undefined - item NOT found
}

export const setValueIsChildren = (arrFilt, categoryList) => {
    arrFilt.forEach(function (item, index, array) {
        // console.log("setValueIsChildren 1", item.isChildren )
        item.isChildren = isItemHaveChildren(categoryList, item.categoryID);
        // console.log("setValueIsChildren 2", item.isChildren)
    })
    return arrFilt;
}


export const isItemHaveChildren = (categoryList, categoryID_UP) => {
    let arrTemp = categoryList.filter(item => item.parentID == categoryID_UP);
    if (arrTemp.length > 0) return true
    else return false;
}


// End. Functions group to normalize the list of categories
/////////////////////////////

