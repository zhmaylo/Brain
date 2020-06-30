import { CATEGORY_LIST, VIEW_LIST_CAT } from '../constants/darConst';


//loads product data from the server into State
export const categoryListRdc = (state = false, action) => {
    switch(action.type) {
        case CATEGORY_LIST:
            return {
                ...state,
                categoryList:action.payload
            };
        default:
            return state;
    }
}

// export default categoryListRdc;

//loads the current displayed list of categories into State
export const viewListCatRdc = (state = false, action) => {
    switch(action.type) {
        case VIEW_LIST_CAT:
            return {
                ...state,
                viewListCat : action.payload
            };
        default:
            return state;
    }
}
// export default categoryListRdc;

