import React, { useContext } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { ProdCardFullCmp } from '../components/prodcard/ProdCardFullCmp';
import { ContextApp } from '../reducers/unionRdc';
import { HeaderBack } from '../components/header/HeaderBackCmp';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { SpinerСmp } from '../components/SpinerCmp';
import { PROD_HEADER_TITLE } from '../constants/headerBackConst';

//shows a product pictures 
export default function ProdScr(props) {
    const { state, dispatch } = useContext(ContextApp);
    // let prodCurrDsc = state.prodCurrentRdc.prodCurrentDescription;
    // let prodCurrImg = state.prodCurrentRdc.prodCurrentImages;

    // console.log('prodScr.state.prodCurrentRdc.prodCurrentDescription=> ', state.prodCurrentRdc.prodCurrentDescription);
    console.log('prodScr.state.prodCurrentRdc.prodCurrentImages=> ', state.prodCurrentRdc.prodCurrentImages);
    if (!state.spinerToggleRdc.spinerToggle)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={PROD_HEADER_TITLE} />
            <View style={styles.item} >

                <ProdCardFullCmp
                    item={state.prodCurrentRdc.prodCurrentDescription}
                    currImages={state.prodCurrentRdc.prodCurrentImages}
                    props={props}
                />
            </View>
            <FooterBack props={props} footerName={FOOTER_BACK_TITLE} />
        </SafeAreaView>
    )

    return (
        <View style={styles.container}>
            <SpinerСmp/>
        </View>
    )
}

//
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
