
// buttonSort - sort list by price from smallest to largest
// listProd - input list

import { SORT_PRICE_DESCEND, SORT_PRICE_ASCEND, SORT_VENDOR_ASCEND, SORT_VENDOR_DESCEND, SORT_WARRANTY_ASCEND, SORT_WARRANTY_DESCEND } from "../reducers/sortListProdRdc";

// sortBySwitch - sorting ListProd by sortSwitchArr
// listProd - product array
// sortSwitchArr - sort switch array
export const sortBySwitch = (listProd = null, sortSwitchArr) => {
    // if (listProd === null) return false;

    let arrFilt = sortSwitchArr.filter(item => item.switchOn == true);
    let sortType = arrFilt[0].sortNameRdc;

    // console.log('sortBySwitch. arrFilt', arrFilt);
    // console.log('sortBySwitch. arrFilt.', arrFilt[0].sortNameRdc);
    console.log('sortBySwitch. sortType', sortType);

    // if (sortType == SORT_PRICE_ASCEND)
    //         listProd.sort((a, b) => a.retail_price_uah - b.retail_price_uah);
    // if (sortType == SORT_PRICE_DESCEND)
    //         listProd.sort((a, b) => b.retail_price_uah - a.retail_price_uah);


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

        // console.log('sortBySwitch. listProd', listProd);

        default:
            return listProd;
    }
    return listProd;
}