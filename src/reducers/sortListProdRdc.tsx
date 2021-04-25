
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

// change state sort swithes
// set switchOn in array 'SORT_NAME_ARR'
export const  sortSwitchArrRdc = (state = false, action) => {
     
        // console.log('sortSwitchArrRdc. action.type', action.type);
        switch(action.type) {
            
        case SORT_PRICE_ASCEND :
            return {
                ...state,
                sortSwitchArr: action.payload
            };

        case SORT_PRICE_DESCEND :
            return {
                ...state,
                sortSwitchArr: action.payload
            };

        case SORT_VENDOR_ASCEND :
            return {
                ...state,
                sortSwitchArr: action.payload
            };

        case SORT_VENDOR_DESCEND :
            return {
                ...state,
                sortSwitchArr: action.payload
            };

        case SORT_WARRANTY_ASCEND :
            return {
                ...state,
                sortSwitchArr: action.payload
            };

        case SORT_WARRANTY_DESCEND :
            return {
                ...state,
                sortSwitchArr: action.payload
            };

            default:
            return state;
    }
};
