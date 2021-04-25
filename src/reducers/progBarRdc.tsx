/////////////////////////////
//Start. Progress Bar section
//
// category loading level (for progress bar)
export const  PROG_BAR_MAX_VOL = 'PROG_BAR_MAX_VOL';
export const  PROG_BAR_CUR_VOL = 'PROG_BAR_CUR_VOL';
// 
//End. Progress Bar section
/////////////////////////////


// progress bar)
export const progBarRdc = (state = false, action) => {
    switch(action.type) {
        // maximum load level 
        case PROG_BAR_MAX_VOL:
            return {
                ...state,
                progBarMaxVol:action.payload
            };
        // current load level 
        case PROG_BAR_CUR_VOL:
            return {
                ...state,
                progBarCurVol:action.payload
            };
        default:
            return state;
    }
}




