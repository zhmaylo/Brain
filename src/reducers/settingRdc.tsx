// status response (error/ok)
export const API_KEY_RDC = 'API_KEY';
//

const settingRdc = (state = [], action: any) => {
    switch (action.type) {
        case API_KEY_RDC:
            return {
                ...state,
                apiKey: action.payload
            };
        default:
            return state;
    }
}
export default settingRdc;