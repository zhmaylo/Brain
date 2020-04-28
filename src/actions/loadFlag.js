import { LOAD_JSON_FLAG } from '../constants';

//actions
export function loadFlag(loading) {
    return {
        type: LOAD_JSON_FLAG,
        payload: loading
    }
}