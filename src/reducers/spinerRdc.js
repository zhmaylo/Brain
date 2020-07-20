import { SPINER_TOGGLE, SPINER_VOLUME, SPINER_MAX } from '../constants/darConst';

// spiner toggle (off(false)/ on(true))
export const spinerToggleRdc = (state = false, action) => {
    switch(action.type) {
        case SPINER_TOGGLE:
            return {
                ...state,
                spinerToggle:action.payload
            };
        default:
            return state;
    }
}

// current spiner volume
export const spinerVolumeRdc = (state = false, action) => {
    switch(action.type) {
        case SPINER_VOLUME:
            return {
                ...state,
                spinerVolume : action.payload
            };
        default:
            return state;
    }
}

// max spiner volume
export const spinerMaxRdc = (state = false, action) => {
    switch(action.type) {
        case SPINER_MAX:
            return {
                ...state,
                spinerMax : action.payload
            };
        default:
            return state;
    }
}

