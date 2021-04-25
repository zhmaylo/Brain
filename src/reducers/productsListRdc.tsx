
// products list (JSON format)
export const  PRODUCTS_LIST = 'PRODUCTS_LIST';
//
// size view list products
export const  SIZE_LIST_PROD = 'SIZE_LIST_PROD';
//

// loads products list from the server into State
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

// lenght view list products
export const sizeListProdRdc = (state = false, action) => {
    switch(action.type) {
        case SIZE_LIST_PROD:
            return {
                ...state,
                sizeListProd:action.payload
            };
        default:
            return state;
    }
}

