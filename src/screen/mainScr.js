import React, { useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ImagePropTypes } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";

import { getCategoryList } from './../api/category/category';
import { AlertMessageCmp } from '../components/AlertMessageCmp';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderCmp } from './../components/HeaderCmp';



export default function mainScr(props) {
    const { state, dispatch } = useContext(ContextApp);

    useEffect(() => {
        // getSid(dispatch).then((sid) => {
        console.log("mainScr. sid=>");//.sessionSid.sid);
        // getCategoryList(state.sessionSidRdc.sessionSid, dispatch).then((data) => {
        // console.log("mainScr.getCategoryList(data)", data);
        // })
        // })

    }, [!state.isAppInitRdc.loading]);

    console.log('mainScr. state.statusResponseRdc.code', state.statusResponseRdc.statusResponse.code);

 
    if (state.statusResponseRdc.statusResponse.code !== -1)
        return <AlertMessageCmp message={state.statusResponseRdc.statusResponse.message} />

    else return (

        <View style={styles.container}>
            <SafeAreaView style={styles.container}>

                {HeaderCmp (props.navigation.toggleDrawer)}
                <Text>mainScreen!</Text>
                <Button
                    // onPress={() => props.navigation.navigate('MenuScreen')}
                    onPress={() => props.navigation.toggleDrawer()}
                    title="MenuScreen" color="#841584" accessibilityLabel="Learn more about this purple button"
                />
                <Button
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
                />
            </SafeAreaView>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});
