import { SPINER_TOGGLE } from "../constants/actionConst";

// Spiner reducers
// 
// spiner toggle (off(false)/ on(true))
export const spinerToggleRdc = (state = [], action: any) => {
    switch (action.type) {
        case SPINER_TOGGLE:
            return {
                ...state,
                spinerToggle: action.payload
            };
        default:
            return state;
    }
}


