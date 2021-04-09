/////////////////////////////
//Start. Filter section
//
// filter all 
export const  FILTER_DEAL_PRICE = 'FILTER_DEAL_PRICE';
export const  MIN_SHOW_LIMIT = 'MIN_SHOW_LIMIT';
export const  MAX_SHOW_LIMIT = 'MAX_SHOW_LIMIT';
// 
//End. Filter section
/////////////////////////////

//
export const filterRdc = (state = false, action) => {
    switch(action.type) {
        case FILTER_DEAL_PRICE:
            return {
                ...state,
                filterDealPrice:action.payload,
                minShowLimit:action.payload.minDealerPrice,
                maxShowLimit:action.payload.maxDealerPrice,
            };
        case MIN_SHOW_LIMIT:
            return {
                ...state,
                minShowLimit:action.payload
            };
        case MAX_SHOW_LIMIT:
            return {
                ...state,
                maxShowLimit:action.payload
            };
        default:
            return state;
    }
}


