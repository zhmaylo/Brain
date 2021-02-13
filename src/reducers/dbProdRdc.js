
// reference to database object (Product.db) 
export const  DB_PROD_OBJ = 'DB_PROD_OBJ';
//

//reference to database object (Product.db)
export const dbProdRdc = (state = false, action) => {
    switch(action.type) {
        case DB_PROD_OBJ:
            return {
                ...state,
                dbProd:action.payload
            };
        default:
            return state;
    }
}


