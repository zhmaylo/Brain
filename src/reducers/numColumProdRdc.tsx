
// number of columns of displayed products
export const  NUM_COLUM_PROD = 'NUM_COLUM_PROD';
//

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
