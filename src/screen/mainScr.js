import React, { useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ImagePropTypes } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";

import { getCategoryList, getMainCategory } from './../api/category/category';
import { AlertMessageCmp } from '../components/AlertMessageCmp';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderCmp } from './../components/HeaderCmp';
import { FooterCmp } from '../components/FooterCmp';
import { MENU_ITEM } from './../constants/menuConst';
// import { FullScreen } from 'react-native-full-screen';
import { CATEGORY_FROM_FILE } from './../constants/categoryJSON';




export default function mainScr(props) {
    const { state, dispatch } = useContext(ContextApp);


    useEffect(() => {
        // getSid(dispatch).then((sid) => {
        console.log("mainScr. sid=>");//.sessionSid.sid);

        // getCategoryList(state.sessionSidRdc.sessionSid, dispatch).then((data) => {
            // console.log("mainScr.getCategoryList(data)", data);
            // dispatch({ type: 'CATEGORY_LIST', payload: data});
            dispatch({ type: 'CATEGORY_LIST', payload: CATEGORY_FROM_FILE });
            dispatch({ type: 'IS_APP_INIT', payload: true });
        // })
        // })

    }, [!state.isAppInitRdc.isAppInit]);

    console.log('mainScr. state.statusResponseRdc.code', state.statusResponseRdc.statusResponse.code);
    console.log('mainScr. state', state);

    // console.log(getMainCategory(categoryFromFile));


    if ((state.statusResponseRdc.statusResponse.code !== -1) && 
    (state.statusResponseRdc.statusResponse.code !== undefined))  
        return <AlertMessageCmp message={state.statusResponseRdc.statusResponse.message} />
   
    else 
    if (state.isAppInitRdc.isAppInit)
        return (

            <View style={styles.container}>
                <SafeAreaView style={styles.container}>

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
                    {props.navigation.navigate(MENU_ITEM[0])}
                </SafeAreaView>
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

    }
});
