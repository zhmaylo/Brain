import { PRODUCTS_LIST } from '../constants/darConst';


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
