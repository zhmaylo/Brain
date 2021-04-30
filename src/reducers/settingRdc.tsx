// status response (error/ok)
export const  API_KEY = 'API_KEY';
//

const settingRdc = (state = [], action: any) => {
    switch(action.type) {
        case API_KEY:
            return {
                ...state,
                statusResponse:action.payload
            };
        default:
            return state;
    }
}
export default settingRdc;