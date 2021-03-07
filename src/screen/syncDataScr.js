import React, { useContext, useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { HeaderBack } from '../components/header/HeaderBackCmp';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { SYNC_BRAIN_VS_ORIGINAL, UNLOAD_PROM_TO_FILE, CLEAR_TABLE_BRAIN, SYNC_DATA_TITLE, CLEAR_TABLE_PROM, TRANS_BRAIN_TO_PROM, UNLOAD_PROM_TO_URL } from './../constants/syncDataConst';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { WINDOW_WIDTH } from '../constants/otherConst';
import { View } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";
import { LogCmp } from '../components/syncdata/LogCmp';
import { ScrollView } from 'react-native-gesture-handler';
import { SyncMenuCmp } from '../components/syncdata/SyncMenuCmp';
import { clearBrainTbl, getCrudLog } from '../api/category/syncDataController';
import { CRUD_LOG } from '../reducers/synDataRdc';

// syncDataScr - work with tables. 
// zeroing, reloading all data, synchronization, unloading for the trading platform
export default function syncDataScr(props) {
    const { state, dispatch } = useContext(ContextApp);
    useEffect(() => {

    }, []);
    // console.log('syncDataScr.MENU_TITLE_LIST=>', MENU_TITLE_LIST)

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
                {/* <SyncMenuCmp callback={clearBrainTbl} menuTitleList={MENU_TITLE_LIST} /> */}
                {/* dispatch({ type: CRUD_LOG, payload: tBrain.getCrudLog() })} */}
                <SyncMenuCmp menuFunc={clearBrainTbl}
                    onLog={() => {
                        let syncDataLog = getCrudLog()
                        dispatch({ type: CRUD_LOG, payload: syncDataLog })
                        console.log('syncDataScr.state', state.syncDataRdc);
                    }
                    }
                    menuTitleList={[
                        { id: '1', title: CLEAR_TABLE_BRAIN, callback: clearBrainTbl },
                        { id: '2', title: CLEAR_TABLE_PROM, callback: null },
                        { id: '3', title: SYNC_BRAIN_VS_ORIGINAL, callback: null },
                        { id: '4', title: TRANS_BRAIN_TO_PROM, callback: null },
                        { id: '5', title: UNLOAD_PROM_TO_FILE, callback: null },
                        { id: '6', title: UNLOAD_PROM_TO_URL, callback: null }]

                    }
                />

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

