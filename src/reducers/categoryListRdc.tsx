import { CATEGORY_LIST, VIEW_LIST_CAT } from "../constants/actionConst";

// Categories list reducers

//loads product data from the server into State
export const categoryListRdc = (state = [], action: any) => {
    switch (action.type) {
        case CATEGORY_LIST:
            return {
                ...state,
                categoryList: action.payload
            };
        default:
            return state;
    }
}


//loads the current displayed list of categories into State
export const viewListCatRdc = (state = [], action: any) => {
    switch (action.type) {
        case VIEW_LIST_CAT:
            return {
                ...state,
                viewListCat: action.payload
            };
        default:
            return state;
    }
}


