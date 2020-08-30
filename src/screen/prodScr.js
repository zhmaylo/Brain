import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { ProdCardFullCmp } from './../components/ProdCardFullCmp';
import { ContextApp } from '../reducers/unionRdc';
import { HeaderBack } from './../components/header/HeaderBackCmp';
import { FooterBack } from './../components/footer/FooterBackCmp';
import { FOOTER_BACK_TITLE } from './../constants/footerBackConst';
import { PROD_HEADER_TITLE } from '../constants/productsConst';

export default function prodScr(props, item) {
    console.log('prodScr');
    const { state, dispatch } = useContext(ContextApp);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={PROD_HEADER_TITLE} />
            <View style={styles.item} >
                <ProdCardFullCmp item={state.prodCurrentRdc.prodCurrent} />
            </View>
            <FooterBack props={props} footerName={FOOTER_BACK_TITLE} />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
    },

    item: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
    },
});
