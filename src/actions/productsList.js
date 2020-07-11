import { PRODUCTS_LIST } from "../constants/darConst";

//actions
export function loadData(data) {
    return {
        type: PRODUCTS_LIST,
        payload: data
    }
}
