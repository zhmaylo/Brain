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
                <ScrollView ><LogCmp /> </ScrollView >
            </View>
            
            <View style={styles.item} >

                <ScrollView >
                    {/* <Text></Text> */}
                    <Button title='Пересоздать таблицу Brain' ></Button>
                    {/* <Text></Text> */}
                    <Button styles={{ padding: 9, margin: 9 }} title='Обнулить базу' ></Button>
                    {/* <Text></Text> */}
                    {/* <Button title='Перезагрузить с Brain все данные' ></Button> */}
                    {/* <Text>Синхронизация базы телефона с Brain</Text> */}
                    <Button title='Синхр c Brain' ></Button>
                    {/* <Text>
                        Выгрузить базу с телефона в файл в
                        локальное хранилище (xls,csv,xlsx,xml,cml документ)
                    </Text> */}
                    <Button title='Выгрузить Prom в ФАЙЛ' ></Button>
                    {/* <Text>
                        Выгрузить базу с телефона в облако
                        Ссылка (URL) на xls,csv,xlsx,xml,cml документ
                        (напр. Google Disk)
                    </Text> */}
                    <Button title='Выгрузить Prom в URL' ></Button>
                </ScrollView>
            </View>
            <FooterBack props={props} footerName={FOOTER_BACK_TITLE} />
        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
        width: WINDOW_WIDTH,
    },

    logcmp: {
        // flex: 1,
        backgroundColor: 'white',
        height: WINDOW_HEIGHT/3*2,
    },

    item: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        paddingTop: 20,
        height: WINDOW_HEIGHT/3*1
    },
});
