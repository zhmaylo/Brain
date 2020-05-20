import { STATUS_RESPONSE } from '../constants/dar';

//actions
export function sessionSid(data) {
    return {
        type: STATUS_RESPONSE,
        payload: data
    }
}