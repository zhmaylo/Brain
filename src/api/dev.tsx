
// Start. Section Dev. Stub.

import { addFieldChildren, sortListbyName } from "./category/category";
import { setFieldIsChildren } from './category/symbChildren';
import { removeProductAbsence } from './products/products';
import { CATEGORY_FROM_FILE } from './../constants/categoryJSON';
import { PRODUCTS_FROM_FILE } from './../constants/productsJSON';
import { sortBySwitch } from './sort';
import { getDealerPriceRange } from "./filter/filter";
import { MINMAX_DEAL_PRICE } from "../constants/actionConst";


// devStub - stub for developer
export const devStub = (state, dispatch) => {
    let data = addFieldChildren(CATEGORY_FROM_FILE);
    data = setFieldIsChildren(data);
    data = sortListbyName(data);

    dispatch({ type: 'CATEGORY_LIST', payload: data });

    let productsList = removeProductAbsence(PRODUCTS_FROM_FILE[0].result.list);
    productsList = sortBySwitch(productsList, state.sortSwitchArrRdc.sortSwitchArr);

    ////////////
    let minmax = getDealerPriceRange(productsList);
    //Note minmax[{minDealerPrice, maxDealerPrice}]
    dispatch({type: MINMAX_DEAL_PRICE, payload: minmax});
    ////////////

    dispatch({ type: 'PRODUCTS_LIST', payload: productsList });
    dispatch({ type: 'IS_APP_INIT', payload: true });
    // });
    return;
}


//End. Section Dev.
