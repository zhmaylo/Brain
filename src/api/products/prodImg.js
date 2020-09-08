
import { URL_GET_PROD_IMG } from './../../constants/urlConst';
import { argMiddle } from './../argMiddle';
import { middleWareFetch } from './../fetch/middleWareFetch';


// getProdImg - returns product image from server. JSON-format.
// productID - "id" produtct category
// sidAndTime - session SID and TimeStamp 
// dispatch - this is callback
export const getProdImg = async (productID, sidAndTime, dispatch) => {
    // console.log("getProdImg =>");
    
    argMiddle.requestUrl = URL_GET_PROD_IMG + productID + '/';
    argMiddle.sidAndTime = sidAndTime;
    argMiddle.dispatch = dispatch;
    // dispatch({ type: SPINER_TOGGLE, payload: true });
         
        
        let arrTemp = await middleWareFetch(argMiddle);
        console.log("getProdImg.arrTemp =>", arrTemp);

        // let result = await arrTemp.json.result;
        // argMiddle.sidAndTime = arrTemp.sidAndTime;
        
        // console.log("getProdImg.result =>", result);
        // console.log("getProdImg.json.length =>", json.length);
        
        // console.log("getProdImg.arrTemp.json.length =>", json.length);

    
    // dispatch({ type: SPINER_TOGGLE, payload: false });

    // console.log("getProdImg=>", json);
    return;
}