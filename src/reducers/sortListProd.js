
// ascending sort by price
export const  SORT_PRICE_ASCEND = 'SORT_PRICE_ASCEND';
// descending sort by price
export const  SORT_PRICE_DESCEND = 'SORT_PRICE_DESCEND';
//

//set number collumns view list products
export const sortListProdRdc = (state = false, action) => {
    switch(action.type) {
        case SORT_PRICE_ASCEND:
            return {
                ...state,
                sortListProd:action.payload
            };
        case SORT_PRICE_DESCEND:
            return {
                ...state,
                sortListProd:action.payload
            };
        default:
            return state;
    }
}
