/////////////////////////////
//Start. Filter section
//
// filter all 
export const  MINMAX_DEAL_PRICE = 'MINMAX_DEAL_PRICE';
export const  MIN_SHOW_LIMIT = 'MIN_SHOW_LIMIT';
export const  MAX_SHOW_LIMIT = 'MAX_SHOW_LIMIT';
// 
//End. Filter section
/////////////////////////////

//
export const filterRdc = (state = false, action) => {
    switch(action.type) {
        // dealer price range
        case MINMAX_DEAL_PRICE:
            return {
                ...state,
                minDealerPrice:action.payload.minDealerPrice,
                maxDealerPrice:action.payload.maxDealerPrice,
                minShowLimit:action.payload.minDealerPrice,
                maxShowLimit:action.payload.maxDealerPrice,
            };
        // minimum show limit
        case MIN_SHOW_LIMIT:
            return {
                ...state,
                minShowLimit:action.payload
            };
        // maximum show limit
        case MAX_SHOW_LIMIT:
            return {
                ...state,
                maxShowLimit:action.payload
            };
        default:
            return state;
    }
}


