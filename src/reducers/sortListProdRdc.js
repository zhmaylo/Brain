
// ascending sort by price
export const  SORT_PRICE_ASCEND = 'SORT_PRICE_ASCEND';
// descending sort by price
export const  SORT_PRICE_DESCEND = 'SORT_PRICE_DESCEND';
// header, sort button, event onPress - true (button press) 
export const  SORT_BUTTON_PRESS = 'SORT_BUTTON_PRESS';
//

//set number collumns view list products
export const sortListProdRdc = (state = false, action) => {
    switch(action.type) {
        case SORT_PRICE_ASCEND:
            return {
                ...state,
                sortListProd:action.payload // = 'SORT_PRICE_ASCEND'
            };
        case SORT_PRICE_DESCEND:
            return {
                ...state,
                sortListProd:action.payload // = 'SORT_PRICE_DESCEND'
            };
        case SORT_BUTTON_PRESS:
            return {
                ...state,
                sortButtonPress:action.payload // = true - button press

            };
        default:
            return state;
    }
};

