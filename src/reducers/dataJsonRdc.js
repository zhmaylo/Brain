import { LOAD_DATA_JSON } from '../constants';


//загружает в State данные о товаре из сервера
const dataJsonRdc = (state = false, action) => {
    switch(action.type) {
        case LOAD_DATA_JSON:
            return {
                ...state,
                dataJson:action.payload
            };
        default:
            return state;
    }
}
export default dataJsonRdc;