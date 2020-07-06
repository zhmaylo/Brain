import React, { useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, View, StatusBar } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";

import { getCategoryList,sortListbyName, addFieldChildren } from './../api/category/category';
import { AlertMessageCmp } from '../components/AlertMessageCmp';
import { HeaderCmp } from './../components/HeaderCmp';
import { FooterCmp } from '../components/FooterCmp';
// import { FullScreen } from 'react-native-full-screen';
import { setFieldIsChildren } from './../api/category/symbChildren';
import { CATEGORY_FROM_FILE } from './../constants/categoryJSON';
import { getProductsList } from './../api/products/products';




export default function mainScr(props) {
    const { state, dispatch } = useContext(ContextApp);


    useEffect(() => {
        // getSid(dispatch).then((sid) => {
        // console.log("mainScr. sid=>");//.sessionSid.sid);

        // getCategoryList(state.sessionSidRdc.sessionSid, dispatch).then((data) => {
        //     // console.log("mainScr.getCategoryList(data)", data);
        //     // console.log("mainScr.CATEGORY_FROM_FILE", CATEGORY_FROM_FILE);
        //     data = addFieldChildren(data);
        //     data = setFieldIsChildren(data);
        //     dispatch({ type: 'CATEGORY_LIST', payload: data});
        // })
                // Start Stub. Section Dev. .
                    let data = addFieldChildren(CATEGORY_FROM_FILE);
                    console.log("CATEGORY_FROM_FILE[0]", CATEGORY_FROM_FILE[0]);
                    data = setFieldIsChildren(data);
                    data = sortListbyName(data);
                               
                    console.log("data[0]", data[0]);
                    dispatch({ type: 'CATEGORY_LIST', payload: data });
                    // {categoryID: 1484, parentID: 1330, isChildren: undefined, realcat: 1235, name: "SSD диски"},
                    getProductsList(1484, state.sessionSidRdc.sessionSid, dispatch);
                //End Stub. Section Dev.

            dispatch({ type: 'IS_APP_INIT', payload: true });
        // {props.navigation.navigate(MENU_ITEM[0])}

    }, [!state.isAppInitRdc.isAppInit]);

    // console.log('mainScr. state.statusResponseRdc.code', state.statusResponseRdc.statusResponse.code);
    // console.log('mainScr. state', state);

    // console.log(getMainCategory(categoryFromFile));


    if ((state.statusResponseRdc.statusResponse.code !== -1) && 
    (state.statusResponseRdc.statusResponse.code !== undefined))  
        return <AlertMessageCmp message={state.statusResponseRdc.statusResponse.message} />
   
    else 
    if (state.isAppInitRdc.isAppInit)
        return (

            <View style={styles.container}>
            <StatusBar hidden={true} />
          
                    {HeaderCmp(props.navigation.toggleDrawer)}
                    <Text>mainScreen!</Text>
                    <Button
                        // onPress={() => props.navigation.navigate('MenuScreen')}
                        onPress={() => props.navigation.toggleDrawer()}
                        title="MenuScreen" color="#841584" accessibilityLabel="Learn more about this purple button"
                    />
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
