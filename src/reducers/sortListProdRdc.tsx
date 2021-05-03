import { SORT_PRICE_ASCEND, SORT_PRICE_DESCEND, SORT_VENDOR_ASCEND, SORT_VENDOR_DESCEND, SORT_WARRANTY_ASCEND, SORT_WARRANTY_DESCEND } from "../constants/actionConst";


// Sort list products reducers
//
// change state sort swithes
// set switchOn in array 'SORT_NAME_ARR'
export const sortSwitchArrRdc = (state = [], action: any) => {

    // console.log('sortSwitchArrRdc. action.type', action.type);
    switch (action.type) {

        case SORT_PRICE_ASCEND:
            return {
                ...state,
                sortSwitchArr: action.payload
            };

        case SORT_PRICE_DESCEND:
            return {
                ...state,
                sortSwitchArr: action.payload
            };

        case SORT_VENDOR_ASCEND:
            return {
                ...state,
                sortSwitchArr: action.payload
            };

        case SORT_VENDOR_DESCEND:
            return {
                ...state,
                sortSwitchArr: action.payload
            };

        case SORT_WARRANTY_ASCEND:
            return {
                ...state,
                sortSwitchArr: action.payload
            };

        case SORT_WARRANTY_DESCEND:
            return {
                ...state,
                sortSwitchArr: action.payload
            };

        default:
            return state;
    }
};
