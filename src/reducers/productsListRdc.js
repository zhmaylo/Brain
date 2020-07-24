
// products list (JSON format)
const  PRODUCTS_LIST = 'PRODUCTS_LIST';
//
// size view list products
const  SIZE_VIEW_LIST_PROD = 'SIZE_VIEW_LIST_PROD';
//

//loads products list from the server into State
export const productsListRdc = (state = false, action) => {
    switch(action.type) {
        case PRODUCTS_LIST:
            return {
                ...state,
                productsList:action.payload
            };
        default:
            return state;
    }
}

//lenght view list products
export const sizeViewListProdRdc = (state = false, action) => {
    switch(action.type) {
        case SIZE_VIEW_LIST_PROD:
            return {
                ...state,
                sizeViewListProd:action.payload
            };
        default:
            return state;
    }
}
