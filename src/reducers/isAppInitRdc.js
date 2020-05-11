import { IS_APP_INIT } from '../constants';


const isAppInitRdc = (state = false, action) => {
    switch(action.type) {
        case IS_APP_INIT:
            return {
                ...state,
                loading:action.payload
            };
        default:
            return state;
    }
}
export default isAppInitRdc;