
// Start. Section Dev. Stub.

import { addFieldChildren, sortListbyName } from "./category/category";

import { setFieldIsChildren } from './category/symbChildren';
import { removeProductAbsence } from './products/products';

import { CATEGORY_FROM_FILE } from './../constants/categoryJSON';
import { PRODUCTS_FROM_FILE } from './../constants/productsJSON';
import { buttonSort } from './header/sort';

// devStub - stub for developer
export const devStub = (state, dispatch) => {
    let data = addFieldChildren(CATEGORY_FROM_FILE);
    // console.log("CATEGORY_FROM_FILE[0]", CATEGORY_FROM_FILE[0]);
    data = setFieldIsChildren(data);
    data = sortListbyName(data);

    // console.log("data[0]", data[0]);
    dispatch({ type: 'CATEGORY_LIST', payload: data });

    // {categoryID: 1484, parentID: 1330, isChildren: undefined, realcat: 1235, name: "SSD диски"},
    // getProductsList(1484, state.sessionSidRdc.sessionSid, dispatch).then((productsList) => {
    let productsList = removeProductAbsence(PRODUCTS_FROM_FILE[0].result.list);

    // console.log("PRODUCTS_FROM_FILE.result => ", PRODUCTS_FROM_FILE[0].result.list);
    // productsList = buttonSort(productsList, state.sortListProdRdc.sortListProd);
    dispatch({ type: 'PRODUCTS_LIST', payload: productsList });
    dispatch({ type: 'IS_APP_INIT', payload: true });
    // });
    return;
}


//End. Section Dev.
