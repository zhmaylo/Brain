import React, { useContext, useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { HeaderBack } from '../components/header/HeaderBackCmp';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { MENU_TITLE_LIST, SYNC_DATA_TITLE } from './../constants/syncDataConst';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { WINDOW_WIDTH } from '../constants/otherConst';
import { View } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";
import { TBrain } from './../api/dbAPI/provider/tBrain';
import { LogCmp } from '../components/syncdata/LogCmp';
import { ScrollView } from 'react-native-gesture-handler';
import { SyncMenuCmp } from '../components/syncdata/SyncMenuCmp';
import { clearBrainTbl } from './../api/category/syncData';



// syncDataScr - work with tables. 
// zeroing, reloading all data, synchronization, unloading for the trading platform
export default function syncDataScr(props) {
    const { state, dispatch } = useContext(ContextApp);
    let tBrain = new TBrain;
    useEffect(() => {
        // const values = PRODUCTS_FROM_FILE[0].result.list[0, 13];
        // tBrain.tCreate(values);
        // tBrain.tDrop();
        // tBrain.tReadAll();
        // tBrain.tDeleteAll();

    }, []);
    console.log('syncDataScr.MENU_TITLE_LIST=>',MENU_TITLE_LIST)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={SYNC_DATA_TITLE} />
            <View style={styles.logcmp}>
                <ScrollView >
                    <LogCmp />
                </ScrollView >
            </View>
            <View style={styles.menuItem} >
                <SyncMenuCmp callback={clearBrainTbl} menuTitleList={MENU_TITLE_LIST} />
            </View>
            <FooterBack props={props} footerName={FOOTER_BACK_TITLE} />
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
        width: WINDOW_WIDTH,
    },

    logcmp: {
        flex: 3,
        backgroundColor: 'white',
    },
    menuItem: {
        flex: 1,
        borderColor: 'lightgray',
        borderTopWidth: 3,
    }
});

