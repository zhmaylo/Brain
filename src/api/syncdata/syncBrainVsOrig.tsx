
import { PRODUCTS_LIST } from '../../reducers/productsListRdc';
import { getCategoryList, addFieldChildren } from './../category/category';
import { setFieldIsChildren } from './../category/symbChildren';
import { getProductsList } from './../products/products';


    export const getCategoryListUpdate = async (state, dispatch) => {
        let categoryList = getCategoryList(state.sessionSidRdc.sessionSid, dispatch).then((data) => {
            data = addFieldChildren(data);
            data = setFieldIsChildren(data);
            return data;
        })
        return categoryList;
    }


    export const getProductListUpdate = async (categoryID, state, dispatch) => {
            let productsList = getProductsList(categoryID, state.sessionSidRdc.sessionSid, dispatch, true).then((productsList) => {
            dispatch({ type: PRODUCTS_LIST, payload: productsList });
            return productsList;
        });
        return productsList;

    }

