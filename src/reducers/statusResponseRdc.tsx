import { STATUS_RESPONSE } from "../constants/actionConst";

// Status response reducers
//
const statusResponseRdc = (state = [], action: any) => {
    switch (action.type) {
        case STATUS_RESPONSE:
            return {
                ...state,
                statusResponse: action.payload
            };
        default:
            return state;
    }
}
export default statusResponseRdc;