
import { URL_GET_CATEGORY } from '../../constants/urlConst';
import { middleWareFetch } from '../fetch/middleWareFetch';
import { setFieldIsChildren } from './symbChildren';
import { SIGN_MAIN_LIST, SIGN_LEVEL_UP } from '../../constants/categoryConst';


// getMainListCategory - returns entry level categories
// categoryJSON - full list category in format JSON
export const getMainListCategory = (categoryJSON) => {
    // console.log("getMainListCategory categoryJSON", categoryJSON);
    let arrMainListCategory = filterViewListCategory(categoryJSON, SIGN_MAIN_LIST);
    return arrMainListCategory;
}

// getListCategory - returns view list category
// categoryJSON - full list category in format JSON
// selectItem - selected parent item  
export const getListCategory = (categoryJSON, selectItem) => {
    let arrViewListCat;
    if (selectItem.name === SIGN_LEVEL_UP) arrViewListCat = getUpperListCategory(categoryJSON, selectItem);
    else if (selectItem.isChildren) arrViewListCat = getUnderListCategory (categoryJSON, selectItem);
    else return false; // no child category 
    return arrViewListCat;
}


// getUpperListCategory - returns lower level categories
// categoryJSON - full list category in format JSON
// selectItem - selected parent item  
const getUpperListCategory = (categoryJSON, selectItem) => {
    // console.log("getMainListCategory categoryJSON", categoryJSON);
    let arrUnderListCategory = categoryJSON.filter(item => item.categoryID === selectItem.parentID);
    arrUnderListCategory = addUpToViewListCategory(arrUnderListCategory);
    return arrUnderListCategory;
}

// getUnderListCategory - returns lower level categories
// categoryJSON - full list category in format JSON
// selectItem - selected parent item  
const getUnderListCategory = (categoryJSON, selectItem) => {
    // console.log("getMainListCategory categoryJSON", categoryJSON);
    let arrUnderListCategory = filterViewListCategory(categoryJSON, selectItem.categoryID);
    arrUnderListCategory = addUpToViewListCategory(arrUnderListCategory);
    return arrUnderListCategory;
}

// filterViewListCategory - returns filter view list category
// categoryJSON - full list category in format JSON
// selectItem - key of filter
const filterViewListCategory = (categoryJSON, selectItem) => {
    let filterCategory = categoryJSON.filter(item => item.parentID === selectItem);
    return filterCategory;
}

// addUpToViewListCat - add "Up (SIGN_LEVEL_UP)" to list categories
// categoryJSON - full list category in format JSON
const addUpToViewListCategory = (viewListCategory) => {
    viewListCategory.unshift({ ...viewListCategory[0] });
    viewListCategory[0].categoryID = 0;
    viewListCategory[0].name = SIGN_LEVEL_UP;
    // console.log("addUpToViewListCat.viewListCategory", viewListCategory);
    return viewListCategory;
}
