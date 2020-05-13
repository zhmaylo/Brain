import { SESSION_SID } from '../constants/dar';

//actions
export function sessionSid(sid) {
    return {
        type: SESSION_SID,
        payload: sid
    }
}