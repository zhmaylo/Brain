import React, { useContext, useEffect } from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";

import { getCategoryList, addFieldChildren } from '../api/category/category';
import { AlertMessageCmp } from '../components/AlertMessageCmp';
import { HeaderCmp } from '../components/header/HeaderCmp';
import { FooterCmp } from '../components/footer/FooterCmp';
import { setFieldIsChildren } from '../api/category/symbChildren';
import { getProductsList } from '../api/products/products';
import { devStub } from '../api/dev';
import { SpinerСmp } from '../components/SpinerCmp';
import { ListProdCmp } from '../components/ListProdCmp';
import { sortBySwitch } from '../api/sort';
import { PRODUCTS_LIST } from '../reducers/productsListRdc';
import { CATEGORY_LIST } from '../reducers/categoryListRdc';
import { IS_APP_INIT } from '../reducers/isAppInitRdc';
import * as storage from '../api/storage/storage';
import { RECENT_CATEG_KEY, RECENT_CATEG_KEY_DEFAULT } from '../constants/storageConst';
import { getDealerPriceRange, getFilteredProducts } from '../api/filter/filter';
import { MINMAX_DEAL_PRICE } from '../reducers/filterRdc';

let i = 0;

// const devMode = true;
const devMode = false;

export default function MainScr(props) {
    const { state, dispatch } = useContext(ContextApp);
    useEffect(() => {
        const initApp = async () => {
            let data = await getCategoryList(state.sessionSidRdc.sessionSid, dispatch)
            data = addFieldChildren(data);
            data = setFieldIsChildren(data);
            
            //get category recent ID
            let catID = await storage.getData(RECENT_CATEG_KEY);
            if (catID == null) catID = RECENT_CATEG_KEY_DEFAULT;
            // get fiters for catID
            let productsList = await getProductsList(catID, state.sessionSidRdc.sessionSid, dispatch);
            productsList = sortBySwitch(productsList, state.sortSwitchArrRdc.sortSwitchArr);

            let minmax = getDealerPriceRange(productsList);
            //Note minmax[{minDealerPrice, maxDealerPrice}]
            dispatch({ type: MINMAX_DEAL_PRICE, payload: minmax});

            dispatch({ type: PRODUCTS_LIST, payload: productsList });
            dispatch({ type: CATEGORY_LIST, payload: data });
            // console.log("mainScr.getCategoryList(data)", data);
            dispatch({ type: IS_APP_INIT, payload: true });
        }
        
        // Start Stub. Section Dev. .
        if (devMode) devStub(state, dispatch);
        //End Stub. Section Dev.
        else if (i < 1) {
            initApp();
            i++;
        }
        
        // dev stub >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // props.navigation.navigate(FILTER_SCR);
        // dev stub >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        
    }, [!state.isAppInitRdc.isAppInit]);
    
    
    if ((state.statusResponseRdc.statusResponse.code !== -1) &&
    (state.statusResponseRdc.statusResponse.code !== undefined))
    return <AlertMessageCmp message={state.statusResponseRdc.statusResponse.message} />
    
    else
    if ((state.isAppInitRdc.isAppInit) && (state.spinerToggleRdc.spinerToggle == false)) {
        //apply filterRdc 
        let filteredProducts = getFilteredProducts(state.productsListRdc.productsList, state.filterRdc.minShowLimit, state.filterRdc.maxShowLimit);
        
        // 
        return (
            <SafeAreaView style={styles.container}>
                    <StatusBar hidden={true} />
                    {HeaderCmp(props)}
                    <ListProdCmp productList={filteredProducts}
                        numCollumns={state.numColumProdRdc.numColumProd}
                        currSizeList={state.sizeListProdRdc.sizeListProd}
                        sidAndTime={state.sessionSidRdc.sessionSid}
                        dispatch={dispatch}
                        props={props}
                    />
                    {FooterCmp(props, state, dispatch)}
                </SafeAreaView>
            );
        }
        else return (
            <View style={styles.container}>
                <SpinerСmp />
            </View>
        )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },

    spiner: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },

});
