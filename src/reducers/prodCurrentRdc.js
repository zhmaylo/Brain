
// product current description
export const  PROD_CURR_DESCRIPTION = 'PROD_CURR_DESCRIPTION';
//
// product current images
export const  PROD_CURR_IMAGES = 'PROD_CURR_IMAGES';
//

// product current images
export const prodCurrentRdc = (state = false, action) => {
    switch(action.type) {
        case PROD_CURR_DESCRIPTION:
            return {
                ...state,
                prodCurrentDescription:action.payload
            };
        case PROD_CURR_IMAGES:
            return {
                ...state,
                prodCurrentImages:action.payload
            };
        default:
            return state;
    }
}
