import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { HeaderBack } from '../components/header/HeaderBackCmp';
import { SORT_HEADER_TITLE, SORT_NAME_ARR } from './../constants/sortConst';
import { FooterBack } from './../components/footer/FooterBackCmp';
import { FOOTER_BACK_TITLE } from './../constants/footerBackConst';

export default function sortScr(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <SafeAreaView style={styles.container}>

            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName= {SORT_HEADER_TITLE} />

            <View style={styles.item}>
                <Text>  {SORT_NAME_ARR[0].sortNameItem} </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                >
                </Switch>
            </View>
  
            <FooterBack props={props} footerName= {FOOTER_BACK_TITLE} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
        paddingTop: 10,
  
    },

    item: {
        flex: 1,
        backgroundColor: "white",
    }

});
