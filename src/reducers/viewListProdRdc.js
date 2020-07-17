import { NUM_COLUM_VIEW_LIST_PROD } from '../constants/darConst';


//set number collumns view list products
export const viewListProdRdc = (state = false, action) => {
    switch(action.type) {
        case NUM_COLUM_VIEW_LIST_PROD:
            return {
                ...state,
                numColumViewListProd:action.payload
            };
        default:
            return state;
    }
}
