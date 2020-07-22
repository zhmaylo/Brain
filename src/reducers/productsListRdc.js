
// products list (JSON format)
const  PRODUCTS_LIST = 'PRODUCTS_LIST';
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
