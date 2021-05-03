import { PRODUCTS_LIST, SIZE_LIST_PROD } from "../constants/actionConst";

// Product list reducers
//
// loads products list from the server into State
export const productsListRdc = (state = [], action: any) => {
    switch (action.type) {
        case PRODUCTS_LIST:
            return {
                ...state,
                productsList: action.payload
            };
        default:
            return state;
    }
}

// lenght view list products
export const sizeListProdRdc = (state = [], action: any) => {
    switch (action.type) {
        case SIZE_LIST_PROD:
            return {
                ...state,
                sizeListProd: action.payload
            };
        default:
            return state;
    }
}

