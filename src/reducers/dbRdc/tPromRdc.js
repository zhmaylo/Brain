
// reference to table market (Prom.db) 
export const  T_PROM_REF = 'T_PROM_REF';
//

// reference to table market (Prom.db) 
export const tPromRefRdc = (state = false, action) => {
    switch(action.type) {
        case T_PROM_REF:
            return {
                ...state,
                tPromRef:action.payload
            };
        default:
            return state;
    }
}


