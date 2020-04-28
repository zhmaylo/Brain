import { LAST_STATE } from '../constants';

//actions
export function lastState(data) {
    return {
        type: LAST_STATE,
        payload: data
    }
}