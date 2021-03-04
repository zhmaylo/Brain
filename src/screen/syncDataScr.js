import React, { useContext, useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Button, Text, FlatList } from 'react-native';

import { HeaderBack } from '../components/header/HeaderBackCmp';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { SYNC_DATA_TITLE } from './../constants/syncDataConst';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../constants/otherConst';
import { View } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";
import { TBrain } from './../api/dbAPI/provider/tBrain';
import { PRODUCTS_FROM_FILE } from './../constants/productsJSON';
import { CATEGORY_FROM_FILE } from './../constants/categoryJSON';
import { LogCmp } from '../components/syncdata/LogCmp';
import { ScrollView } from 'react-native-gesture-handler';
import { MenuItemCmp } from '../components/syncdata/MenuItemCmp';
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
    // console.log("sycDataScr. CATEGORY_FROM_FILE", CATEGORY_FROM_FILE);
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

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MenuItemCmp title='Очистить таблицу Brain' callback={clearBrainTbl} />
                    <MenuItemCmp title='Очистить таблицу Prom' />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <MenuItemCmp title='Синхр Brain vs Provider' />
                    <MenuItemCmp title='Конверт Brain в Prom' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MenuItemCmp title='Выгрузить Prom в файл'/>
                    <MenuItemCmp title='Выгрузить Prom в URL' />
                </View>
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
        // paddingBottom: 5,
        backgroundColor: 'white',
    },



    menuItem: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        padding: 5,
        // borderRadius: 10,
        borderTopWidth: 1,
        //  alignItems: 'flex-start',
        // width: 100,
    }
});

