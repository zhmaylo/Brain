
// reference to table market (Prom.db) 
export const  T_PROM = 'T_PROM';
//

// reference to table market (Prom.db) 
export const tPromRdc = (state = false, action) => {
    switch(action.type) {
        case T_PROM:
            return {
                ...state,
                tProm:action.payload
            };
        default:
            return state;
    }
}


