import { STORAGE_TO_STATE } from '../constants';

//чтение из локального хранилища
const storageToStateRdc = (state = false, action) => {
    switch(action.type) {
        case STORAGE_TO_STATE:
            return {
                ...state,
                storageToState:action.payload
            };
        default:
            return state;
    }
}
export default storageToStateRdc;