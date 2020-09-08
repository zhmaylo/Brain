import React, { useContext, useEffect } from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";

import { getCategoryList, addFieldChildren } from './../api/category/category';
import { AlertMessageCmp } from '../components/AlertMessageCmp';
import { HeaderCmp } from '../components/header/HeaderCmp';
import { FooterCmp } from './../components/footer/FooterCmp';
import { setFieldIsChildren } from './../api/category/symbChildren';
import { getProductsList } from './../api/products/products';
import { devStub } from './../api/dev';
import { SpinerСmp } from '../components/SpinerCmp';
import { ListProdCmp } from '../components/ListProdCmp';
import { sortBySwitch } from './../api/sort';
import { PRODUCTS_LIST } from '../reducers/productsListRdc';
import { CATEGORY_LIST } from '../reducers/categoryListRdc';
import { IS_APP_INIT } from './../reducers/isAppInitRdc';

let i = 0;
// const devMode = true;
const devMode = false;

export default function mainScr(props) {
    const { state, dispatch } = useContext(ContextApp);

    useEffect(() => {

        // console.log("mainScr. sid=>");//.sessionSid.sid);
        // console.log("mainScr.state 1 => ", state);
        // Start Stub. Section Dev. .
        if (devMode) devStub(state, dispatch);
        //End Stub. Section Dev.
        else if (i < 1) {
            getCategoryList(state.sessionSidRdc.sessionSid, dispatch).then((data) => {
                // console.log("mainScr.getCategoryList(data)", data);
                // console.log("mainScr.CATEGORY_FROM_FILE", CATEGORY_FROM_FILE);
                // console.log("mainScr.state 2 => ", state);
                data = addFieldChildren(data);
                data = setFieldIsChildren(data);

                getProductsList(1403, state.sessionSidRdc.sessionSid, dispatch).then((productsList) => {
                    console.log("getProductsList => ", productsList);
                    // productsList = buttonSort(productsList, state.sortSwitchArrRdc.sortSwitchArr);
                    productsList = sortBySwitch(productsList, state.sortSwitchArrRdc.sortSwitchArr);
                    dispatch({ type: PRODUCTS_LIST, payload: productsList });
                    dispatch({ type: CATEGORY_LIST, payload: data });
                    dispatch({ type: IS_APP_INIT, payload: true });
                });
            })
            i++;
        }
        // console.log("mainScr.state 3 => ", state);

    }, [!state.isAppInitRdc.isAppInit]);

    // console.log('mainScr. state.statusResponseRdc.code', state.statusResponseRdc.statusResponse.code);
    // console.log('mainScr. state', state);

    // console.log(getMainCategory(categoryFromFile));
    // console.log("state.isAppInitRdc.isAppInit", state.isAppInitRdc.isAppInit);

    if ((state.statusResponseRdc.statusResponse.code !== -1) &&
        (state.statusResponseRdc.statusResponse.code !== undefined))
        return <AlertMessageCmp message={state.statusResponseRdc.statusResponse.message} />

    else
        if ((state.isAppInitRdc.isAppInit) && (state.spinerToggleRdc.spinerToggle == false))
            return (
                <SafeAreaView style={styles.container}>
                        <StatusBar hidden={true} />
                        {HeaderCmp(props)}
                        {/* <MenuSortCmp sortButtonPress={state.sortButtonPressRdc.sortButtonPress} dispatch={dispatch} /> */}

                        <ListProdCmp productList={state.productsListRdc.productsList}
                            numCollumns={state.numColumProdRdc.numColumProd}
                            currSizeList={state.sizeListProdRdc.sizeListProd}
                            dispatch={dispatch}
                            props={props}
                        />
                   {FooterCmp(props.navigation.toggleDrawer, state, dispatch)}
                </SafeAreaView>
            );

//                        /* <Button
//                        // onPress={() => props.navigation.navigate('MenuScreen')}
//                        onPress={() => props.navigation.toggleDrawer()}
//                        title="MenuScreen" color="#841584" accessibilityLabel="Learn more about this purple button"
//                    /> */
//                        {/* <Button
//                    onPress={() => props.navigation.navigate('FindScreen')}
//                    title="FindScreen" color="#841584" accessibilityLabel="Learn more about this purple button"
//                />
//                <Button
//                    onPress={() => props.navigation.navigate('ConfigScreen')}
//                    title="ConfigScreen" color="#841584" accessibilityLabel="Learn more about this purple button"
//                />
//                <Button
//                    onPress={() => props.navigation.navigate('BasketScreen')}
//                    title="BasketScreen" color="#841584" accessibilityLabel="Learn more about this purple button"
//                /> */}


        else return (
            <View style={styles.container}>
                <SpinerСmp/>
            </View>
        )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        
        paddingTop: 10,
    },
    
    spiner: {
        flex: 1,
        backgroundColor: '#fff',
        
        paddingTop: 10,
    },

});
