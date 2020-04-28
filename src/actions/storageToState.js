import { STORAGE_TO_STATE } from '../constants';

//actions
export function storageToState(data) {
    return {
        type: STORAGE_TO_STATE,
        payload: data
    }
}