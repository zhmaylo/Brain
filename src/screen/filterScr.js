import React, { useContext } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Text, TextInput, Button } from 'react-native';

import { HeaderBack } from '../components/header/HeaderBackCmp';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { WINDOW_WIDTH } from '../constants/otherConst';
import { ContextApp } from "../reducers/unionRdc";
import { FILTER_HEADER_TITLE } from './../constants/filterConst';


export default function filterScr(props) {
    const { state, dispatch } = useContext(ContextApp);

    // getFilterProd()
    return (

        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={FILTER_HEADER_TITLE} />
            <View style={styles.item} >
                <TextInput styles={{width:100, height:20}} keyboardType='number-pad' defaultValue='input number' />
                <Button styles={{width:100, height:20}} title='Reset'/>
                <Button styles={{width:100, height:20}} title='+100'/>
                <Button styles={{width:100, height:20}} title='+1000'/>
                <Button styles={{width:100, height:20}} title='+10000'/>
            </View>

            <FooterBack props={props} footerName={FOOTER_BACK_TITLE} />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
        width: WINDOW_WIDTH,
    },

    item: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
    },
});
