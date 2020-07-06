// getProductsList - returns products list of a specified category from server. JSON-format.
// sidAndTime - session SID and TimeStamp 

import { URL_GET_PRODUCTS } from "../../constants/urlConst";
import { middleWareFetch } from './../fetch/middleWareFetch';

// dispatch - this is callback
export const getProductsList = async (categoryID, sidAndTime, dispatch) => {
    
    // console.log("getProductsList. sidAndTime => ", sidAndTime)
    //let filterID = "?filterID='a'";
    // let filterID ='?sortby=articul';
    //product_code: "U0344115"
    let filterID ='?sortby=available&order=desc&offset=0';
    let json = await middleWareFetch(URL_GET_PRODUCTS+categoryID+'/', null, sidAndTime, filterID, dispatch);
    // let json = await middleWareFetch( 'https://api.brain.com.ua/filters_all/'+categoryID+'/', null, sidAndTime, filterID, dispatch);
    
    // console.log("getProductsList=>", json);
    json = await json.result;
     console.log("getProductsList 2 =>", json);
    return json;
}


// EAN: ""
// FOP: 0
// articul: "SV300S37A/120G"
// available: []
// bonus: 0
// brief_description: "внутренний, V300, Тип флеш-памяти - MLC, SATA 6Gb/s, 450 Mb/s, 450 Mb/s, 1м. ч."
// categoryID: "1235"
// country: "США"
// full_image: "http://brain.com.ua/static/common/images/no-photo-api.png"
// is_archive: "0"
// is_exclusive: "0"
// is_new: "0"
// kbt: "0"
// large_image: "http://opt.brain.com.ua/static/images/prod_img/4/1/U0033541_big.jpg"
// medium_image: "http://opt.brain.com.ua/static/images/prod_img/4/1/U0033541.jpg"
// name: "Накопитель SSD 2.5" 120GB Kingston (SV300S37A/120G)"
// prepayment_amount: "0"
// price: "23.77"
// price_uah: "645.00"
// productID: "41681"
// product_code: "U0033541"
// quantity_package_sale: 0
// recommendable_price: "0.00"
// retail_price_uah: "666.00"
// small_image: "http://opt.brain.com.ua/static/images/prod_img/4/1/U0033541_small.jpg"
// stocks: []
// stocks_expected: []
// vendorID: "25"
// volume: "0"
// warranty: "36"
// weight: "0.15"

//////////////////
// EAN: ""
// FOP: 0
// articul: "CT500MX500SSD4"
// available: []
// bonus: 0
// brief_description: "внутренний, MX500, Тип флеш-памяти - 3D NAND, SATA 6Gb/s, 560 Mb/s, 510 Mb/s, 1.8 млн. часов"
// categoryID: "1235"
// country: "США"
// full_image: "http://brain.com.ua/static/common/images/no-photo-api.png"
// is_archive: "0"
// is_exclusive: "0"
// is_new: "0"
// kbt: "0"
// large_image: "http://opt.brain.com.ua/static/images/prod_img/6/4/U0309164_big.jpg"
// medium_image: "http://opt.brain.com.ua/static/images/prod_img/6/4/U0309164.jpg"
// name: "Накопитель SSD M.2 2280 500GB MICRON (CT500MX500SSD4)"
// prepayment_amount: "0"
// price: "74.70"
// price_uah: "2028.00"
// productID: "324617"
// product_code: "U0309164"
// quantity_package_sale: 0
// recommendable_price: "0.00"
// retail_price_uah: "2047.00"
// small_image: "http://opt.brain.com.ua/static/images/prod_img/6/4/U0309164_small.jpg"
// stocks: []
// stocks_expected: {1: "2020-07-07 18:00:00", 19: "2020-07-08 14:00:00", 29: "2020-07-08 18:00:00", 42: "2020-07-08 17:00:00", 58: "2020-07-08 18:25:00", 73: "2020-07-09 14:00:00", 94: "2020-07-08 18:00:00", 121: "2020-07-08 17:30:00", 144: "2020-07-09 15:00:00", 168: "2020-07-08 17:00:00", 172: "2020-07-08 18:00:00", 225: "2020-07-08 17:55:00", 245: "2020-07-08 16:00:00", 258: "2020-07-09 13:00:00", 259: "2020-07-09 18:00:00", 1001: "2020-07-08 19:00:00", 1002: "2020-07-08 20:00:00"}
// vendorID: "388"
// volume: "0"
// warranty: "60"
// weight: "0.05"
// __proto__: Object