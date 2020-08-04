
// buttonSort - sort list by price from smallest to largest
// listProd - input list
// sort - sort type
export const buttonSort = (listProd = null, sort) => {
    if (listProd === null) return false;

    if (sort == SORT_PRICE_ASCEND)
        listProd.sort((a, b) => a.retail_price_uah - b.retail_price_uah);
    if (sort == SORT_PRICE_DESCEND)
        listProd.sort((a, b) => b.retail_price_uah - a.retail_price_uah);
    return listProd;
}