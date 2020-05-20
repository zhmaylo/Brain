import { STATUS_RESPONSE } from '../constants/dar';


const statusResponseRdc = (state = false, action) => {
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