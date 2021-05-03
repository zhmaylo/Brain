import { SESSION_SID } from "../constants/actionConst";

// SID reducers
//
const sessionSidRdc = (state = [], action: any) => {
    // console.log("sessionSidRdc.action", action);
    switch (action.type) {
        case SESSION_SID:
            return {
                ...state,
                sessionSid: action.payload
            };
        default:
            return state;
    }
}
export default sessionSidRdc;