
// product current
export const  PROD_CURR = 'PROD_CURR';
//

// product current
export const prodCurrentRdc = (state = false, action) => {
    switch(action.type) {
        case PROD_CURR:
            return {
                ...state,
                prodCurrent:action.payload
            };
        default:
            return state;
    }
}
