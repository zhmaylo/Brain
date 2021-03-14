
import { URL_GET_PRODUCTS } from "../../constants/urlConst";
import { middleWareFetch } from './../fetch/middleWareFetch';
import { OFFSET, LIMIT } from './../../constants/productsConst';
import { argMiddle } from './../argMiddle';
import { SPINER_TOGGLE } from "../../reducers/spinerRdc";

// getProductsList - returns products list of a specified category from server. JSON-format.
// categoryID - "id" produtcts category
// sidAndTime - session SID and TimeStamp 
// dispatch - this is callback
export const getProductsList = async (categoryID, sidAndTime, dispatch) => {
    let json = [], offset = 0, arrTemp = 0, result;
    
    argMiddle.requestUrl = URL_GET_PRODUCTS + categoryID + '/';
    argMiddle.sidAndTime = sidAndTime;
    argMiddle.dispatch = dispatch;
    dispatch({ type: SPINER_TOGGLE, payload: true });
    do {
        argMiddle.params = '?offset=' + offset+'&limit='+LIMIT;
        // console.log("getProductsList.offset =>", offset);
        arrTemp = await middleWareFetch(argMiddle);
        // console.log("getProductsList.arrTemp =>", arrTemp);

        result = await arrTemp.json.result;
        argMiddle.sidAndTime = arrTemp.sidAndTime;
        removeProductAbsence(result.list).forEach((item) => json.push(item));
       
        offset += OFFSET;

        // console.log("getProductsList.result.count =>", result.count);
        // console.log("getProductsList.json.length =>", json.length);
        
        // console.log("getProductsList.arrTemp.json.length =>", json.length);

    } while (offset <= result.count); //json.result.length)
    
    dispatch({ type: SPINER_TOGGLE, payload: false });

    // console.log("getProductsList=>", json);
    return json;
}

// removeProductAbsence - remove product absence
// data - entering array
// arr - compressed array
export const removeProductAbsence = (data) => {
    // console.log("removeProductAbsence. data =>", data);
    let arr=[];
    data.forEach((item) => {
        if ((item.stocks_expected.length != 0) && (item.available.length !=0)) arr.push(item);
    });
    // console.log("removeProductAbsence. arr =>", arr);
    return arr;
}

// setSizeListProd - set size view list products (pagination)
// currSize - current size view list of products
// stepPagin - step pagination
// maxSize - lenght list of products
export const setSizeListProd = (currSize, stepPagin, maxSize) => {
    // console.log("setSizeListProd. currSize =>", currSize);
    // console.log("setSizeListProd. maxSize =>", cumaxSizerrSize);
    currSize+=stepPagin;
    (currSize>=maxSize) && (currSize=maxSize);
    // console.log("setSizeListProd. newSize =>", newSize);
    return currSize;
}


// let json = await middleWareFetch( 'https://api.brain.com.ua/filters_all/'+categoryID+'/', null, sidAndTime, filterID, dispatch);
// let filterID = "?filterID='a'";
// let filterID ='?sortby=articul&order=desc&offset=0'';
