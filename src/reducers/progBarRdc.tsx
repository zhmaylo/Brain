import { PROG_BAR_CUR_VOL, PROG_BAR_MAX_VOL } from "../constants/actionConst";

// Progress Bar reducers
//
// progress bar)
export const progBarRdc = (state = [], action: any) => {
    switch (action.type) {
        // maximum load level 
        case PROG_BAR_MAX_VOL:
            return {
                ...state,
                progBarMaxVol: action.payload
            };
        // current load level 
        case PROG_BAR_CUR_VOL:
            return {
                ...state,
                progBarCurVol: action.payload
            };
        default:
            return state;
    }
}




