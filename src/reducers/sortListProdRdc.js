
// ascending sort by price
export const  SORT_PRICE_ASCEND = 'SORT_PRICE_ASCEND';
// descending sort by price
export const  SORT_PRICE_DESCEND = 'SORT_PRICE_DESCEND';
//
// ascending sort by vendor
export const  SORT_VENDOR_ASCEND = 'SORT_VENDOR_ASCEND';
// descending sort by vendor
export const  SORT_VENDOR_DESCEND = 'SORT_VENDOR_DESCEND';
//
// ascending sort by warranty
export const  SORT_WARRANTY_ASCEND = 'SORT_WARRANTY_ASCEND';
// descending sort by warranty
export const  SORT_WARRANTY_DESCEND = 'SORT_WARRANTY_DESCEND';
//

//set number collumns view list products
export const sortListProdRdc = (state = false, action) => {
    switch(action.type) {
        case (SORT_PRICE_ASCEND || SORT_PRICE_DESCEND || 
            SORT_VENDOR_ASCEND || SORT_VENDOR_DESCEND || 
            SORT_WARRANTY_ASCEND || SORT_WARRANTY_DESCEND) :
            return {
                ...state,
                sortListProd:action.payload 
            };

            default:
            return state;
    }
};
