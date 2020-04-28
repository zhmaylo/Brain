import { LOCAL_STORE_LOAD } from '../constants';

//actions
export function midlWare(flag) {
    return {
        type: LOCAL_STORE_LOAD,
        payload: flag
    }
}