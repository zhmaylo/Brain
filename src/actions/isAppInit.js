import { IS_APP_INIT } from '../constants';

//actions
export function isAppInit(loading) {
    return {
        type: IS_APP_INIT,
        payload: loading
    }
}