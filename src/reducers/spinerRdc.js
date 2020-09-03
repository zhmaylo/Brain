/////////////////////////////
//Start. Spiner section
//
// spiner toggle (off(false)/ on(true))
export const  SPINER_TOGGLE = 'SPINER_TOGGLE';
// 
//End. Spiner section
/////////////////////////////

// spiner toggle (off(false)/ on(true))
export const spinerToggleRdc = (state = false, action) => {
    switch(action.type) {
        case SPINER_TOGGLE:
            return {
                ...state,
                spinerToggle:action.payload
            };
        default:
            return state;
    }
}


