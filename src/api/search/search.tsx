
// getSearchResult - return search result
// products - products list

import { clone } from "../clone";

// request - search string
export const getSearchResult = (products: any, request: string) => {
    let outProducts = [];
    // scheck search length
    if (request.length == 0) return products;

    let combineItem: string;
    let regExpArr = getRegExpArr(request);
    products.forEach((item: any) => {
        combineItem = combine(item);
        (isRequestInItem(regExpArr, combineItem)) && (outProducts.push(item));
    });
    return outProducts;
};

// isRequestInItem - checking if the request is in an element
// requestArr - array of query substrings
// combineItem - combine item fields
const isRequestInItem = (regExpArr: any, combineItem: string) => {
    let i = 0;
    let testRes: any;
    while (i < regExpArr.length) {
        testRes = regExpArr[i].test(combineItem);
        if (!testRes) { return false };
        i++;
    };
    return true;
};

// getRegExpArr - return regular expression array
// request - search string
// return - array of regular expression 
const getRegExpArr = (request: string) => {
    // query split into substrings
    let requestArr = request.match(/[a-zа-я0-9]+/gui);
    // array of regular expression 
    let regExpArr = new Array();
    requestArr.forEach((item: any) => {
        let regEx = new RegExp(item, 'iu');
        regExpArr.push(regEx);
    });
    return regExpArr;
};


// combine - item strings
// item -product information
// return - combine item fields
const combine = (item: any) => {
    return (
        item.productID + ' '
        + item.product_code + ' '
        + item.articul + ' '
        + item.name + ' '
        + item.brief_description + ' '
        + item.country
    );
}

