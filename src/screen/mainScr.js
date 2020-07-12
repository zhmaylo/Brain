import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";

import { getCategoryList, addFieldChildren } from './../api/category/category';
import { AlertMessageCmp } from '../components/AlertMessageCmp';
import { HeaderCmp } from './../components/HeaderCmp';
import { FooterCmp } from '../components/FooterCmp';
import { setFieldIsChildren } from './../api/category/symbChildren';
import { getProductsList } from './../api/products/products';
import { ProductCardCmp } from './../components/ProductCardCmp';
import { devStub } from './../api/dev';


let i = 0;
const devMode = true;
// const devMode = false;

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

                getProductsList(1484, state.sessionSidRdc.sessionSid, dispatch).then((productsList) => {
                    console.log("getProductsList => ", productsList);
                    dispatch({ type: 'PRODUCTS_LIST', payload: productsList });
                    dispatch({ type: 'CATEGORY_LIST', payload: data });
                    dispatch({ type: 'IS_APP_INIT', payload: true });
                });
            })
            i++;
        }
        // console.log("mainScr.state 3 => ", state);

    }, [!state.isAppInitRdc.isAppInit]);

    // console.log('mainScr. state.statusResponseRdc.code', state.statusResponseRdc.statusResponse.code);
    // console.log('mainScr. state', state);

    // console.log(getMainCategory(categoryFromFile));
    console.log("state.isAppInitRdc.isAppInit", state.isAppInitRdc.isAppInit);

    if ((state.statusResponseRdc.statusResponse.code !== -1) &&
        (state.statusResponseRdc.statusResponse.code !== undefined))
        return <AlertMessageCmp message={state.statusResponseRdc.statusResponse.message} />

    else
        if (state.isAppInitRdc.isAppInit)
            return (

                <View style={styles.container}>
                    <StatusBar hidden={true} />

                    {HeaderCmp(props.navigation.toggleDrawer)}
                    {/* <Text>mainScreen!</Text> */}
                    <ProductCardCmp item={state.productsListRdc.productsList[0]} />

                    {/* <Button
                        // onPress={() => props.navigation.navigate('MenuScreen')}
                        onPress={() => props.navigation.toggleDrawer()}
                        title="MenuScreen" color="#841584" accessibilityLabel="Learn more about this purple button"
                    /> */}
                    {/* <Button
                    onPress={() => props.navigation.navigate('FindScreen')}
                    title="FindScreen" color="#841584" accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => props.navigation.navigate('ConfigScreen')}
                    title="ConfigScreen" color="#841584" accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => props.navigation.navigate('BasketScreen')}
                    title="BasketScreen" color="#841584" accessibilityLabel="Learn more about this purple button"
                /> */}
                    {FooterCmp(props.navigation.toggleDrawer)}



                </View>

            );
        else return (
            <View>
                <Text>Init App</Text>
            </View>
        )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 18,

    }
});
