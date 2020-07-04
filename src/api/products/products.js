// getProductsList - returns products list of a specified category from server. JSON-format.
// sidAndTime - session SID and TimeStamp 

import { URL_GET_PRODUCTS } from "../../constants/urlConst";

// dispatch - this is callback
export const getProductsList = async (categoryID, sidAndTime, dispatch) => {
    
    // console.log("getProductsList. sidAndTime => ", sidAndTime)
    let json = await middleWareFetch(URL_GET_PRODUCTS, null, sidAndTime, dispatch);
    json = json.result;
    console.log("getProductsList=>", json);
    return json;
}
