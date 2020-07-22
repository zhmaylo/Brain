
// SID session 
const  SESSION_SID  = 'SESSION_SID';
//

const sessionSidRdc = (state = false, action) => {
    // console.log("sessionSidRdc.action", action);
    switch(action.type) {
        case SESSION_SID:
            return {
                ...state,
                sessionSid : action.payload 
            };
        default:
            return state;
    }
}
export default sessionSidRdc;