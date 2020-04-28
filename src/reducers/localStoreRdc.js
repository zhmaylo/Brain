import { LOCAL_STORE_LOAD } from '../constants';

//чтение из локального хранилища
const localStoreRdc = (state = false, action) => {
    switch(action.type) {
        case LOCAL_STORE_LOAD:
            return {
                ...state,
                localStore:action.payload
            };
        default:
            return state;
    }
}
export default localStoreRdc;