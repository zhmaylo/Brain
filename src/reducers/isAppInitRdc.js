import { IS_APP_INIT } from '../constants/darConst';


const isAppInitRdc = (state = false, action) => {
    switch(action.type) {
        case IS_APP_INIT:
            return {
                ...state,
                isAppInit:action.payload
            };
        default:
            return state;
    }
}
export default isAppInitRdc;