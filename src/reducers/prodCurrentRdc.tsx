import { PROD_CURR_DESCRIPTION, PROD_CURR_IMAGES } from "../constants/actionConst";

// Product current Reducers
//
// product current images
export const prodCurrentRdc = (state = [], action: any) => {
    switch (action.type) {
        case PROD_CURR_DESCRIPTION:
            return {
                ...state,
                prodCurrentDescription: action.payload
            };
        case PROD_CURR_IMAGES:
            return {
                ...state,
                prodCurrentImages: action.payload
            };
        default:
            return state;
    }
}
