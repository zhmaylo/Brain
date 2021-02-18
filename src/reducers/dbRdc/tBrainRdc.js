
// reference to table provider (Brain.tbl) 
export const  T_BRAIN = 'T_BRAIN';
//

// reference to table provider (Brain.tbl) 
export const tBrainRdc = (state = false, action) => {
    switch(action.type) {
        case T_BRAIN:
            return {
                ...state,
                tBrain:action.payload
            };
        default:
            return state;
    }
}


