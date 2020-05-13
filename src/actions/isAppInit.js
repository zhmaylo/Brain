import { IS_APP_INIT } from '../constants/dar';

//actions
export function isAppInit(loading) {
    return {
        type: IS_APP_INIT,
        payload: loading
    }
}