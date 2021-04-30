
// buttonSort - sort list by price from smallest to largest
// listProd - input list

import { SORT_PRICE_DESCEND, SORT_PRICE_ASCEND, SORT_VENDOR_ASCEND, SORT_VENDOR_DESCEND, SORT_WARRANTY_ASCEND, SORT_WARRANTY_DESCEND } from "../reducers/sortListProdRdc";

// sortBySwitch - sorting ListProd by sortSwitchArr
// listProd - product array
// sortSwitchArr - sort switch array
export const sortBySwitch = (listProd = null, sortSwitchArr) => {
    let arrFilt = sortSwitchArr.filter(item => item.switchOn == true);
    let sortType = arrFilt[0].sortNameRdc;
 
    switch (sortType) {
        case SORT_PRICE_ASCEND:
            {
                listProd.sort((a, b) => a.retail_price_uah - b.retail_price_uah)
                break;
            };
        case SORT_PRICE_DESCEND:
            {
                listProd.sort((a, b) => b.retail_price_uah - a.retail_price_uah)
                break;
            };

        case SORT_VENDOR_ASCEND:
            {
                listProd.sort((a, b) => a.vendorID - b.vendorID);
                break;
            };
        case SORT_VENDOR_DESCEND:
            {
                listProd.sort((a, b) => b.vendorID - a.vendorID);
                break;
            };

        case SORT_WARRANTY_ASCEND:
            {
                listProd.sort((a, b) => a.warranty - b.warranty);
                break;
            };
        case SORT_WARRANTY_DESCEND:
            {
                listProd.sort((a, b) => b.warranty - a.warranty);
                break;
            };

 
        default:
            return listProd;
    }
    return listProd;
}