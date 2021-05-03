import { NUM_COLUM_PROD } from "../constants/actionConst";

// Number column of main screen reducers
//
//set number collumns view list products
export const numColumProdRdc = (state = [], action: any) => {
    switch (action.type) {
        case NUM_COLUM_PROD:
            return {
                ...state,
                numColumProd: action.payload
            };
        default:
            return state;
    }
}
