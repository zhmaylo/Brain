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
import { SpinerСmp } from '../components/spiner/SpinerCmp';
import { ListProdCmp } from '../components/listprod/ListProdCmp';
import { sortBySwitch } from '../api/sort';
import * as storage from '../api/storage/storage';
import { RECENT_CATEG_KEY, RECENT_CATEG_KEY_DEFAULT } from '../constants/storageConst';
import { getDealerPriceRange, getFilteredProducts } from '../api/filter/filter';
import { CATEGORY_LIST, IS_APP_INIT, MINMAX_DEAL_PRICE, PRODUCTS_LIST, PROD_LIST_FILTERED } from '../constants/actionConst';
import { SPINER_MES_LOAD } from '../constants/spinerConst';
import { DEV_MODE } from '../constants/devModeConst';
import { getSearchResult } from '../api/search/search';
import { setChoice } from '../api/setchoice';

let i = 0;

export default function MainScr(props: any) {
    const { state, dispatch } = useContext(ContextApp);
    useEffect(() => {
        const initApp = async () => {
            let data: any = await getCategoryList(state.sessionSidRdc.sessionSid, dispatch)
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
            dispatch({ type: MINMAX_DEAL_PRICE, payload: minmax });

            dispatch({ type: PRODUCTS_LIST, payload: productsList });
            dispatch({ type: CATEGORY_LIST, payload: data });
            // console.log("mainScr.getCategoryList(data)", data);
            dispatch({ type: IS_APP_INIT, payload: true });
        }
        setChoice(
            state.productsListRdc.productsList,
            state.filterRdc.minShowLimit,
            state.filterRdc.maxShowLimit,
            state.searchRdc.search_request,
            dispatch);

        // Start Stub. Section Dev. .
        if (DEV_MODE) {
            devStub(state, dispatch);
        }
        //End Stub. Section Dev.
        else if (i < 1) {
            initApp();
            i++;
        }

    }, [!state.isAppInitRdc.isAppInit]);

    // dev stub >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // props.navigation.navigate(SEARCH_SCR);
    // dev stub >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




    if ((state.statusResponseRdc.statusResponse.code !== -1) &&
        (state.statusResponseRdc.statusResponse.code !== undefined))
        return <AlertMessageCmp message={state.statusResponseRdc.statusResponse.message} />

    else

        if ((state.isAppInitRdc.isAppInit) && (state.spinerToggleRdc.spinerToggle == false)) {
             return (
                <SafeAreaView style={styles.container}>
                    <StatusBar hidden={true} />
                    <HeaderCmp props={props} />
                    <ListProdCmp productList={state.productsListRdc.prodListFiltered}
                        numCollumns={state.numColumProdRdc.numColumProd}
                        currSizeList={state.sizeListProdRdc.sizeListProd}
                        sidAndTime={state.sessionSidRdc.sessionSid}
                        dispatch={dispatch}
                        props={props}
                    />
                    <FooterCmp state={state} dispatch={dispatch} />
                </SafeAreaView>
            );
        }
        else return (
            <View style={styles.spiner}>
                <SpinerСmp
                    spiner_mes={SPINER_MES_LOAD}
                />
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
        justifyContent: 'center',
        alignItems: 'center',
    },

});
