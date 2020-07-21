
import { URL_GET_PRODUCTS } from "../../constants/urlConst";
import { middleWareFetch } from './../fetch/middleWareFetch';
import { OFFSET, LIMIT } from './../../constants/productsConst';
import { argMiddle } from './../argMiddle';

// getProductsList - returns products list of a specified category from server. JSON-format.
// categoryID - "id" produtcts category
// sidAndTime - session SID and TimeStamp 
// dispatch - this is callback
export const getProductsList = async (categoryID, sidAndTime, dispatch) => {
    let json = [], offset = 0, arrTemp = 0, result;
    
    argMiddle.requestUrl = URL_GET_PRODUCTS + categoryID + '/';
    argMiddle.sidAndTime = sidAndTime;
    argMiddle.dispatch = dispatch;
    dispatch({ type: 'SPINER_TOGGLE', payload: true });
    do {
        argMiddle.params = '?offset=' + offset+'&limit='+LIMIT;
        // console.log("getProductsList.offset =>", offset);
        arrTemp = await middleWareFetch(argMiddle);
       
        result = await arrTemp.json.result;
        argMiddle.sidAndTime = arrTemp.sidAndTime;
        removeProductAbsence(result.list).forEach((item) => json.push(item));
       
        offset += OFFSET;

        console.log("getProductsList.result.count =>", result.count);
        console.log("getProductsList.json.length =>", json.length);
        
        // console.log("getProductsList.arrTemp.json.length =>", json.length);
        dispatch({ type: 'SPINER_VOLUME', payload: offset });
        dispatch({ type: 'SPINER_MAX', payload: result.count });

    } while (offset <= result.count); //json.result.length)
    dispatch({ type: 'SPINER_VOLUME', payload: 0 });
    dispatch({ type: 'SPINER_TOGGLE', payload: false });

    console.log("getProductsList=>", json);
    return json;
}

// removeProductAbsence - remove product absence
// data - entering array
// arr - compressed array
export const removeProductAbsence = (data) => {
    // console.log("removeProductAbsence. data =>", data);
    let arr=[];
    data.forEach((item) => {
        if (item.stocks_expected.length != 0) arr.push(item);
    });
    // console.log("removeProductAbsence. arr =>", arr);
    return arr;
}



// let json = await middleWareFetch( 'https://api.brain.com.ua/filters_all/'+categoryID+'/', null, sidAndTime, filterID, dispatch);
// let filterID = "?filterID='a'";
// let filterID ='?sortby=articul&order=desc&offset=0'';
