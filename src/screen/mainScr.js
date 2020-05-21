import React, { useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";

import { getCategoryList } from './../api/category/category';
import { ErrorAlert } from './../components/ErrorAlertCmp';


export default function mainScr(props) {
    const { state, dispatch } = useContext(ContextApp);

    useEffect(() => {
        // getSid(dispatch).then((sid) => {
            // console.log("mainScr. sid=>");//.sessionSid.sid);
            // getCategoryList(state.sessionSidRdc.sessionSid, dispatch).then((data) => {
                    // console.log("mainScr.getCategoryList(data)", data);
            // })
        // })

    }, [!state.isAppInitRdc.loading]);

    console.log('mainScr. state.statusResponseRdc.code', state.statusResponseRdc.statusResponse.code);
    let statusResponse = state.statusResponseRdc.statusResponse;

    if (state.statusResponseRdc.statusResponse.code ==-1)
        // return (<ErrorAlert errorResp = "123" />);
        return (<ErrorAlert errorResp = {statusResponse} />);
    else return (
   
        <View style={styles.container}>
          
            <Text>mainScreen!</Text>

            {/* <Button
                onPress={() => props.navigation.navigate('MenuScreen')}
                title="MenuScreen" color="#841584"  accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => props.navigation.navigate('FindScreen')}
                title="FindScreen" color="#841584"  accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => props.navigation.navigate('ConfigScreen')}
                title="ConfigScreen" color="#841584"  accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => props.navigation.navigate('BasketScreen')}
                title="BasketScreen" color="#841584"  accessibilityLabel="Learn more about this purple button"
            /> */}
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
