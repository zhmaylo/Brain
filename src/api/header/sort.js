
// buttonSort - sort list by price from smallest to largest
// listProd - input list

import { SORT_PRICE_DESCEND, SORT_PRICE_ASCEND } from "../../reducers/sortListProd";

// sort - sort type
export const buttonSort = (listProd = null, sortType) => {
    if (listProd === null) return false;

    if (sortType == SORT_PRICE_ASCEND)
        listProd.sort((a, b) => a.retail_price_uah - b.retail_price_uah);
    if (sortType == SORT_PRICE_DESCEND)
        listProd.sort((a, b) => b.retail_price_uah - a.retail_price_uah);
    return listProd;
}