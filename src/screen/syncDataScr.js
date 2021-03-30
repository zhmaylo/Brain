import React, { useContext, useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { HeaderBack } from '../components/header/HeaderBackCmp';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { SYNC_BRAIN_VS_ORIGINAL, CLEAR_TABLE_BRAIN, SYNC_DATA_TITLE, READ_TABLE_INFO, GET_PRICE_BRAIN } from './../constants/syncDataConst';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { WINDOW_WIDTH } from '../constants/otherConst';
import { View } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";
import { LogCmp } from '../components/syncdata/LogCmp';
import { SyncMenuCmp } from '../components/syncdata/SyncMenuCmp';
import { syncBrainVsOrigContr, clearBrainTblContr, getPriceBrain} from '../api/syncdata/syncDataController';
import { readTableInfoContr } from './../api/syncdata/syncDataController';

// syncDataScr - work with tables. 
// zeroing, reloading all data, synchronization, unloading for the trading platform
export default function syncDataScr(props) {
    const { state, dispatch } = useContext(ContextApp);
   
    
    // console.log('syncDataScr.MENU_TITLE_LIST=>', MENU_TITLE_LIST)
    // console.log('syncDataScr.state.SyncDataRdc.syncDataCrudLog=>', state.syncDataRdc.syncDataCrudLog);
    // console.log('syncDataScr.typeof clearBrainTbl', typeof clearBrainTbl);



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={SYNC_DATA_TITLE} />
            
            <View style={styles.logcmp}>
                    <LogCmp logArr={state.syncDataRdc.syncDataCrudLog} />

            </View>
  
            <View style={styles.menuItem} >
                <SyncMenuCmp
                    menuTitleList={[
                        { id: '1', title: CLEAR_TABLE_BRAIN, menuFunc: clearBrainTblContr },
                        { id: '2', title: SYNC_BRAIN_VS_ORIGINAL, menuFunc: syncBrainVsOrigContr },
                        { id: '3', title: READ_TABLE_INFO, menuFunc: readTableInfoContr },
                        { id: '4', title: GET_PRICE_BRAIN, menuFunc: getPriceBrain }
                        
                    ]
                    }
                    state={state}
                    dispatch={dispatch}
                /> 

            </View>
            <FooterBack props={props} footerName={FOOTER_BACK_TITLE} />
        </SafeAreaView >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        // justifyContent: "flex-start",    
        // alignContent: 'flex-end',    
        backgroundColor: "#F0F0F0",
        width: WINDOW_WIDTH,
    },

    logcmp: {
        flex: 1,
        backgroundColor: 'white',
    },
    menuItem: {
        height: 100,
        borderColor: 'lightgray',
        borderTopWidth: 3,
    }
});

