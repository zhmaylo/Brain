
// Search reducers

import { SEARCH_REQUEST } from "../constants/actionConst";

//
export const searchRdc = (state = [], action: any) => {
    switch (action.type) {
        // search string
        case SEARCH_REQUEST:
            return {
                ...state,
                search_request: action.payload
            };
        default:
            return state;
    }
}


