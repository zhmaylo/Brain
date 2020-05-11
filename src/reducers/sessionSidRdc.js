import { SESSION_SID } from '../constants';


const sessionSidRdc = (state = false, action) => {
    switch(action.type) {
        case SESSION_SID:
            return {
                ...state,
                sid:action.payload
            };
        default:
            return state;
    }
}
export default sessionSidRdc;