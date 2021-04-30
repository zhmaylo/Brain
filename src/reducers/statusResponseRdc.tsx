// status response (error/ok)
export const  STATUS_RESPONSE = 'STATUS_RESPONSE';
//

const statusResponseRdc = (state = [], action: any) => {
    switch(action.type) {
        case STATUS_RESPONSE:
            return {
                ...state,
                statusResponse:action.payload
            };
        default:
            return state;
    }
}
export default statusResponseRdc;