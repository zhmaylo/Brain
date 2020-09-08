
// application initialization flag
export const IS_APP_INIT = 'IS_APP_INIT';
//

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