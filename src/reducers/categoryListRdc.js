import { CATEGORY_LIST } from '../constants/dar';


//загружает в State данные о товаре из сервера
const categoryListRdc = (state = false, action) => {
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
export default categoryListRdc;