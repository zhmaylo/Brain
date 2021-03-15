
import { PRODUCTS_LIST } from '../../reducers/productsListRdc';
import { getCategoryList, addFieldChildren } from './../category/category';
import { setFieldIsChildren } from './../category/symbChildren';
import { getProductsList } from './../products/products';

// export class SyncBrainVsOrig {

    // constructor(){};
    // constructor(...args) {
    // }

    export const getCategoryListUpdate = async (state, dispatch) => {
        // console.log('SynBrainVsOrig.state', state);
        // console.log('SynBrainVsOrig.dispatch', dispatch);
        let categoryList = getCategoryList(state.sessionSidRdc.sessionSid, dispatch).then((data) => {
            // console.log("syncBrainVsOrig.state  => ", state);
            data = addFieldChildren(data);
            data = setFieldIsChildren(data);
            // dispatch({ type: CATEGORY_LIST, payload: data });
            return data;
        })
        return categoryList;
    }


    export const getProductListUpdate = async (categoryID, state, dispatch) => {
            console.log("getProductListUpdate.categoryID => ", categoryID);
            let productsList = getProductsList(categoryID, state.sessionSidRdc.sessionSid, dispatch).then((productsList) => {
            // console.log("getProductListUpdate => ", productsList);
            // productsList = buttonSort(productsList, state.sortSwitchArrRdc.sortSwitchArr);
            // productsList = sortBySwitch(productsList, state.sortSwitchArrRdc.sortSwitchArr);
            dispatch({ type: PRODUCTS_LIST, payload: productsList });
            return productsList;
        });
        return productsList;

    }

// }
