
// reference to table provider (Brain.tbl) 
export const  T_BRAIN_REF = 'T_BRAIN_REF';
//

// reference to table provider (Brain.tbl) 
export const tBrainRefRdc = (state = false, action) => {
    switch(action.type) {
        case T_BRAIN_REF:
            return {
                ...state,
                tBrainRef:action.payload
            };
        default:
            return state;
    }
}


