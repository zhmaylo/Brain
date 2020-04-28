import { LOAD_JSON_FLAG } from '../constants';

//флаг загузки данных из сервера магазина
const loadJsonFlagRdc = (state = false, action) => {
    switch(action.type) {
        case LOAD_JSON_FLAG:
            return {
                ...state,
                loadJsonFlag:action.payload
            };
        default:
            return state;
    }
}
export default loadJsonFlagRdc;