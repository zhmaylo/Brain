import { LOADING_END } from '../constants';

//actions
export function changeCount(loading) {
    return {
        type: LOADING_END,
        payload: loading
    }
}