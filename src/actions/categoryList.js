import { CATEGORY_LIST } from '../constants/dar';

//actions
export function loadData(data) {
    return {
        type: CATEGORY_LIST,
        payload: data
    }
}