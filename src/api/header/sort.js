
// buttonSort - sort list by price from smallest to largest
// listProd - input list
export const buttonSort = (listProd = null) => {
    if (listProd === null) return false;
    listProd.sort((a, b) => a.retail_price_uah - b.retail_price_uah);
    return listProd;
}