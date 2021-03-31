
// getFilterProd - return filters for categoryID. JSON-format
import { URL_GET_FILTER_ALL } from "../constants/urlConst";
import { FILTER_ALL } from "../reducers/filterRdc";
import { argMiddle } from './argMiddle';
import { middleWareFetch } from './fetch/middleWareFetch';


// sidAndTime - session SID and TimeStamp 
// dispatch - this is callback
// cateoryID - category id to get filters 
export const getFilterProd = async (sidAndTime, dispatch, categoryID) => {
    
    // console.log('getFilterProd.sidAndTime', sidAndTime);
    // console.log('getFilterProd.dispatch', dispatch);
    // console.log('getFilterProd.categoryID', categoryID);

    /// get JSON
    argMiddle.requestUrl = URL_GET_FILTER_ALL + categoryID + '/';
    argMiddle.sidAndTime = sidAndTime;
    argMiddle.dispatch = dispatch;
    argMiddle.params = '?lang=ru';
    console.log("getFilterProd.argMiddle =>", argMiddle.requestUrl);
    let arrTemp = await middleWareFetch(argMiddle);
    console.log("getFilterProd.arrTemp =>", arrTemp.json.result);
    //
    dispatch({ type: FILTER_ALL, payload:  arrTemp.json.result });

    // return json;
}


// Запрос:
// http://api.brain.com.ua/filters_all/125/gpkavk4s0aciujg6m698gev040

// Ответ:
// {
// "status":1,
// "result":
//     [
//         {
//         "name":"Тип ноутбука",
//         "optionID":216,
//         "filters":
//             [
//                 {"filterID":"216-86012946200","name":"Apple"},
//                 {"filterID":"216-86012969500","name":"Бизнес"},
//                 {"filterID":"216-86012946000","name":"Для работы и учебы"},
//                 {"filterID":"216-86012945300","name":"Игровой"},
//                 {"filterID":"216-86012946100","name":"Мультимедийный центр"},
//                 {"filterID":"216-86012946800","name":"Портативные"},
//                 {"filterID":"216-86012946600","name":"Трансформер"}
//             ]
//         },
//         {
//         "name":"Производитель",
//         "optionID":3,
//         "filters":
//             [
//                 {"filterID":"3-75001200000","name":"Acer"},
//                 {"filterID":"3-83017200000","name":"Apple"},
//                 {"filterID":"3-02303000000","name":"ASUS"},
//                 {"filterID":"3-75001300000","name":"Dell"},
//                 {"filterID":"3-75001700000","name":"HP"},
//                 {"filterID":"3-75000900000","name":"SONY"}
//             ]
//         },
//         {
//         "name":"Диагональ дисплея",
//         "optionID":6615,
//         "filters":
//             [
//                 {"filterID":"6615-g2830","name":"10.1\" - 12.5\""},
//                 {"filterID":"6615-g2829","name":"13.3\" - 14.1\""},
//                 {"filterID":"6615-g2828","name":"15.6\" - 16\""},
//                 {"filterID":"6615-g2827","name":"17.3\" - 18.4\""}
//             ]
//         },
//         {
//         "name":"Процессор",
//         "optionID":199,
//         "filters":
//             [
//                 {"filterID":"199-g2285","name":"Intel Core M"},
//                 {"filterID":"199-g38","name":"Intel Core i7"},
//                 {"filterID":"199-g53","name":"Intel Core i5"},
//                 {"filterID":"199-g66","name":"Intel Core i3"}
//                 {"filterID":"199-g1020","name":"AMD A10"},
//                 {"filterID":"199-g360","name":"AMD A8"},
//                 {"filterID":"199-g347","name":"AMD A6"},
//                 {"filterID":"199-g77","name":"AMD A4"}
//                 {"filterID":"199-g356","name":"другой"},
//                 {"filterID":"199-g1447","name":"NVIDIA Tegra"}
//             ]
//         },
//         {
//         "name":"Цвет корпуса",
//         "optionID":218,
//         "filters":
//             [
//                 {"filterID":"218-g2862","name":"Black"},
//                 {"filterID":"218-g2860","name":"Gold"},
//                 {"filterID":"218-g2859","name":"Grey"},
//                 {"filterID":"218-g2857","name":"Red"},
//                 {"filterID":"218-g2856","name":"Silver"},
//                 {"filterID":"218-g2866","name":"White"}
//             ]
//         }
//     ]
// }
