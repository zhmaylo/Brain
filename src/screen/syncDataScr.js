import React, { useContext } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Button, Text } from 'react-native';

import { HeaderBack } from '../components/header/HeaderBackCmp';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { SYNC_DATA_TITLE } from './../constants/syncDataConst';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { WINDOW_WIDTH } from '../constants/otherConst';
import { View } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";
import { createDB } from './../api/syncdata/crud';

export default function syncDataScr(props) {
    const { state, dispatch } = useContext(ContextApp);
    createDB();
    return (

        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={SYNC_DATA_TITLE} />
            <View style={styles.item} >
                <View style={{ paddingTop: 30, bottom: 20 }}>
                    <Text></Text>
                    <Button title='Создать базу' ></Button>
                </View>
                <View style={{ paddingTop: 30, bottom: 20 }}>
                    <Text></Text>
                    <Button title='Обнулить базу' ></Button>
                </View>
                <View style={{ paddingTop: 30, bottom: 20 }}>
                    <Text></Text>
                    <Button title='Загрузить с Brain все заново' ></Button>
                </View>
                <View style={{ paddingTop: 30, bottom: 20 }}>
                    <Text>Синхронизация базы телефона с Brain</Text>
                    <Button title='Синхронизация c Brain' ></Button>
                </View>
                <View style={{ paddingTop: 50, bottom: 20, alignItems: 'center' }}>
                    <Text>
                        Выгрузить базу с телефона в файл в
                        локальное хранилище (xls,csv,xlsx,xml,cml документ)
                    </Text>
                    <Button title='Base to Local File' ></Button>
                </View>
                <View style={{ paddingTop: 50, bottom: 20, alignItems: 'center' }}>
                    <Text>
                        Выгрузить базу с телефона в облако 
                        Ссылка (URL) на xls,csv,xlsx,xml,cml документ
                        (напр. Google Disk)
                    </Text>
                    <Button title='base to URL' ></Button>
                </View>
            </View>
            <FooterBack props={props} footerName={FOOTER_BACK_TITLE} />
        </SafeAreaView >

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
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        backgroundColor: "white",
    },
});
