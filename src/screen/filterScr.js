import React, { useContext } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Text, TextInput, Button, TouchableOpacity } from 'react-native';

import { HeaderBack } from '../components/header/HeaderBackCmp';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { ContextApp } from "../reducers/unionRdc";
import { FILTER_HEADER_TITLE } from './../constants/filterConst';
import { InputRangeCmp } from '../components/filter/InputRangeCmp';


// filterScr
export default function filterScr(props) {
    const { state, dispatch } = useContext(ContextApp);

    // getFilterProd()
    return (

        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={FILTER_HEADER_TITLE} />
            <View style={styles.inputRange} >
                <InputRangeCmp onChangeCmp={(val) => {
                    console.log('🚀 ~ file: filterScr.js ~ line 26 ~ filterScr ~ val', val);
                }}
                />
            </View>
            <FooterBack props={props} footerName={FOOTER_BACK_TITLE} />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        flexDirection: 'column',
    },
    inputRange: {
        flex: 1,
        backgroundColor: 'white',
    }
});
