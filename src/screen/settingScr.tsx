import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { HeaderBack } from '../components/header/HeaderBackCmp';
import { API_KEY_TITLE, SETTING_HEADER_TITLE } from '../constants/settingConst';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { SettingApiKey } from '../components/setting/SettingApiKey';


export default function SettingScr(props) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.headerFooter}>
                <HeaderBack props={props} headerName={SETTING_HEADER_TITLE} />
            </View>
            <View style={styles.itemGroup}>
                <SettingApiKey title={API_KEY_TITLE} />
            </View>
            <View style={styles.headerFooter}>
                <FooterBack props={props} footerName={FOOTER_BACK_TITLE} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    headerFooter: {
        backgroundColor: "#f0f0f0",
    },

    itemGroup: {
        flex: 1,
        justifyContent: 'flex-start',
    },

});
