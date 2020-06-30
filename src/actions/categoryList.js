import { CATEGORY_LIST } from '../constants/dar';
import { VIEW_LIST_CAT } from '../constants/darConst';

//actions
export function loadData(data) {
    return {
        type: CATEGORY_LIST,
        payload: data
    }
}

export function viewListCata(data) {
    return {
        type: VIEW_LIST_CAT,
        payload: data
    }
}