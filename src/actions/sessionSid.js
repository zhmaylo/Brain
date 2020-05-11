import { SESSION_SID } from '../constants';

//actions
export function sessionSid(sid) {
    return {
        type: SESSION_SID,
        payload: sid
    }
}