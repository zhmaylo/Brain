
// reference to database object (Product.db) 
export const  DB_PROD_REF = 'DB_PROD_REF';
//

//reference to database object (Product.db)
export const dbProdRdc = (state = false, action) => {
    switch(action.type) {
        case DB_PROD_REF:
            return {
                ...state,
                dbProd:action.payload
            };
        default:
            return state;
    }
}


