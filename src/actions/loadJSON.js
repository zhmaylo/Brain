import { LOAD_DATA_JSON } from '../constants';

//actions
export function loadData(data) {
    return {
        type: LOAD_DATA_JSON,
        payload: data
    }
}