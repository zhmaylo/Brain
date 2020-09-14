
import { URL_GET_PROD_IMG } from '../../constants/urlConst';
import { argMiddle } from '../argMiddle';
import { middleWareFetch } from '../fetch/middleWareFetch';


// getProdImg - returns product image from server. JSON-format.
// productID - "id" produtct category
// sidAndTime - session SID and TimeStamp 
// dispatch - this is callback
export const prodImgLoad = async (productID, sidAndTime, dispatch) => {
    // console.log("prodImgLoad =>");
    
    argMiddle.requestUrl = URL_GET_PROD_IMG + productID + '/';
    argMiddle.sidAndTime = sidAndTime;
    argMiddle.dispatch = dispatch;
    argMiddle.params = '';
         
        
        let arrTemp = await middleWareFetch(argMiddle);
        // console.log("prodImgLoad.arrTemp =>", arrTemp);

        let result = await arrTemp.json.result;
        // argMiddle.sidAndTime = arrTemp.sidAndTime;
        
        console.log("getProdImg.result =>", result);
        // console.log("prodImgLoad.json.length =>", json.length);
        
        // console.log("prodImgLoad.arrTemp.json.length =>", json.length);

    // console.log("prodImgLoad=>", json);
    return result;
}