import { SESSION_SID } from '../constants/dar';
import { SPINER_TOGGLE, SPINER_VOLUME, SPINER_MAX } from '../constants/darConst';

//actions
export function spinerToggle(data) {
    return {
        type: SPINER_TOGGLE,
        payload: data
    }
}

export function spinerVolume(data) {
    return {
        type: SPINER_VOLUME,
        payload: data
    }
}

export function spinerMax(data) {
    return {
        type: SPINER_MAX,
        payload: data
    }
}
