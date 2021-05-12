import { PROD_LIST_FILTERED } from "../constants/actionConst";
import { clone } from "./clone";
import { getFilteredProducts } from "./filter/filter";
import { getSearchResult } from "./search/search";
import { sortBySwitch } from "./sort";

// setChoice - aplly filter and search and updating main screen
//
export const setChoice = (productsList: any, minShowLimit: any, maxShowLimit: any, search_request: any, dispatch: any, sortSwitchArr: any) => {

    //apply filterRdc 
    let filteredProducts = getFilteredProducts(productsList, minShowLimit, maxShowLimit);
    // 
    // apply search
    filteredProducts = getSearchResult(filteredProducts, search_request);
    console.log("🚀 filteredProducts.legth", filteredProducts.length);
    //
    // apply sort
    sortBySwitch(clone(productsList), );
    // updating data for the main screen
    dispatch({ type: PROD_LIST_FILTERED, payload: filteredProducts });
};
