/////////////////////////////
//Start. Filter section
//
// filter all 
export const  FILTER_DEAL_PRICE = 'FILTER_DEAL_PRICE';
// 
//End. Filter section
/////////////////////////////

//
export const filterRdc = (state = false, action) => {
    switch(action.type) {
        case FILTER_DEAL_PRICE:
            return {
                ...state,
                filterDealPrice:action.payload
            };
        default:
            return state;
    }
}


