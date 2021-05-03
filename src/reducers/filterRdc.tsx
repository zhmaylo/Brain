import { MAX_SHOW_LIMIT, MINMAX_DEAL_PRICE, MIN_SHOW_LIMIT } from "../constants/actionConst";

// Filter reducers
//
export const filterRdc = (state = [], action: any) => {
    switch (action.type) {
        // dealer price range
        case MINMAX_DEAL_PRICE:
            return {
                ...state,
                minDealerPrice: action.payload.minDealerPrice,
                maxDealerPrice: action.payload.maxDealerPrice,
                minShowLimit: action.payload.minDealerPrice,
                maxShowLimit: action.payload.maxDealerPrice,
            };
        // minimum show limit
        case MIN_SHOW_LIMIT:
            return {
                ...state,
                minShowLimit: action.payload
            };
        // maximum show limit
        case MAX_SHOW_LIMIT:
            return {
                ...state,
                maxShowLimit: action.payload
            };
        default:
            return state;
    }
}


