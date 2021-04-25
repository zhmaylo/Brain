
import { middleWareFetch } from '../fetch/middleWareFetch';
import { argMiddle } from '../argMiddle';
import { SPINER_TOGGLE } from "../../reducers/spinerRdc";
import { URL_GET_PRICE_LIST } from './../../constants/urlConst';

// getPriceList - returns the price list. All availability. Full price list. JSON-format.
// sidAndTime - session SID and TimeStamp 
// dispatch - this is callback
export const getPriceList = async (sidAndTime, dispatch) => {
    dispatch({ type: SPINER_TOGGLE, payload: true });
    
    /// get url
    argMiddle.requestUrl = URL_GET_PRICE_LIST + '/29/json/';
    argMiddle.sidAndTime = sidAndTime;
    argMiddle.dispatch = dispatch;
    argMiddle.params = '?lang=' + 'ru' + '&full=' + '1';
    let arrTemp = await middleWareFetch(argMiddle);
    console.log("getPriceList.arrTemp =>", arrTemp.json.url);
    //

    /// get file
    argMiddle.requestUrl = arrTemp.json.url;
    argMiddle.params = '';
    // arrTemp = await middleWareFetch(argMiddle);
    console.log("getPriceList.arrTemp =>", arrTemp);
    ///

    dispatch({ type: SPINER_TOGGLE, payload: false });

    // return json;
}

// file format
// json:
// 
// Article: "BK500EI"
// Available: 0
// Bonus: 0
// CategoryID: 7273
// CategoryName: "Источники бесперебойного питания"
// ClassID: 166
// ClassName: "Источник бесперебойного питания"
// Code: "10750"
// CostDelivery: 0
// Country: "Индия"
// DDP: 0
// DayDelivery: "2"
// Description: "для домашних ПК, базовая защита, резервный (off line), 300 Вт, 500 В*А, ступенчатая синусоида, 180 до 260 В, 91х165х284, 6.4 кг"
// Exclusive: 0
// FOP: 0
// Group: "Устройства бесперебойного питания"
// GroupID: 1035
// Model: "Back-UPS CS 500"
// Name: "Источник бесперебойного питания Back-UPS CS 500 APC (BK500EI)"
// Note: ""
// PriceUSD: 143.17
// Price_ind: 0
// ProductID: 2
// RecommendedPrice: 0
// RetailPrice: 4026
// Stock: "0"
// UKTVED: "8504403000"
// URL: "https://opt.brain.com.ua/Istochnik_bespereboynogo_pitaniya_APC_Back-UPS_CS_500_BK500EI-p2906.html"
// Vendor: "APC"
// Warranty: 24
// __proto__: Object