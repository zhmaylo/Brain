import { SESSION_SID } from '../constants/darConst';


const sessionSidRdc = (state = false, action) => {
    switch(action.type) {
        case SESSION_SID:
            return {
                ...state,
                sessionSid:action.payload
            };
        default:
            return state;
    }
}
export default sessionSidRdc;