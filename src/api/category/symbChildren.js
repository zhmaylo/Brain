/////////////////////////////
// Start. Functions group to set value field 'isChildren' in the list of categories
//isChildren = undefined - isChildren field not checked
//isChildren = true - isChldren have children
//isChildren = false - isChldren do NOT have children


// setFieldIsChildren - set field 'isChildren' to "true" or "false"
// categoryList - full list category in format 'Array of Objects'
export const setFieldIsChildren = (categoryList) => {
    if (isUndef(categoryList)) {
        categoryList.forEach(function (item, index, array) {
            item.isChildren = isItemHaveChildren(categoryList, item.categoryID);
        })
        
    };
    return categoryList;
};

// isUndef - checks the incoming list "arrFilt" for the value "undefined"
// arrFilt - current category level
// return "true" - values "undefined" found, 
// return "undefined" - values "undefined" NOT found
export const isUndef = (arrFilt) => {
    let arrTemp = arrFilt.find(item => item.isChildren == undefined);
    return arrTemp; //true - item found, undefined - item NOT found
}

// isItemHaveChildren - checks for the presence of "children" in the category
// categoryList - full list category in format 'Array of Objects'
// categoryID_UP - "id" верхней категории
const isItemHaveChildren = (categoryList, categoryID_UP) => {
    let arrTemp = categoryList.filter(item => item.parentID === categoryID_UP);
    if (arrTemp.length > 0) return true // children found
    else return false; // children NOT found
}


// End. Functions group to normalize the list of categories
/////////////////////////////

