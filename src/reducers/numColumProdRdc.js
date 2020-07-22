import { NUM_COLUM_PROD } from '../constants/darConst';


//set number collumns view list products
export const numColumProdRdc = (state = false, action) => {
    switch(action.type) {
        case NUM_COLUM_PROD:
            return {
                ...state,
                numColumProd:action.payload
            };
        default:
            return state;
    }
}
