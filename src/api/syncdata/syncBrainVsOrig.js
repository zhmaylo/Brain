
import { CATEGORY_LIST } from '../../reducers/categoryListRdc';
import { getCategoryList, addFieldChildren } from './../category/category';
import { setFieldIsChildren } from './../category/symbChildren';
import { getProductsList } from './../products/products';


export const syncBrainVsOrig = (state, dispatch, tBrain) => {
    console.log('SynBrainVsOrig.state', state);
    state=state.state; 
    dispatch=dispatch.dispatch;
    // console.log('SynBrainVsOrig.dispatch', dispatch);
 
    getCategoryList(state.sessionSidRdc.sessionSid, dispatch).then((data) => {
        // console.log("mainScr.getCategoryList(data)", data);
        // console.log("mainScr.CATEGORY_FROM_FILE", CATEGORY_FROM_FILE);
        // console.log("mainScr.state 2 => ", state);
        data = addFieldChildren(data);
        data = setFieldIsChildren(data);
        dispatch({ type: CATEGORY_LIST, payload: data });

        getProductsList(1403, state.sessionSidRdc.sessionSid, dispatch).then((productsList) => {
            console.log("getProductsList => ", productsList);
            // productsList = buttonSort(productsList, state.sortSwitchArrRdc.sortSwitchArr);
            productsList = sortBySwitch(productsList, state.sortSwitchArrRdc.sortSwitchArr);
            tBrain.tReplace();
            dispatch({ type: PRODUCTS_LIST, payload: productsList });
            dispatch({ type: CATEGORY_LIST, payload: data });
            dispatch({ type: IS_APP_INIT, payload: true });
        });
    })
    // i++;
}



export const getProductByCategory= () => {

}
