import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { HeaderBack } from '../components/header/HeaderBackCmp';
import { API_KEY_TITLE, SETTING_HEADER_TITLE } from '../constants/settingConst';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { SetValueCmp } from '../components/setting/SetValueCmp';
import { API_KEY_KEY } from '../constants/storageConst';
import { API_KEY_DEFAULT } from '../constants/authorizConst';
import { ContextApp } from '../reducers/unionRdc';
import { API_KEY } from '../reducers/settingRdc';


export default function SettingScr(props: any) {
    const { state, dispatch } = useContext(ContextApp);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.headerFooter}>
                <HeaderBack props={props} headerName={SETTING_HEADER_TITLE} />
            </View>
            {/* //set API key */}
            <View style={styles.itemGroup}>
                <SetValueCmp
                    title={API_KEY_TITLE}
                    key={API_KEY_KEY}
                    valueDef={API_KEY_DEFAULT}
                    onChange={(value: string) => {
                        dispatch({ type: API_KEY, payload: value });
                    }}
                />
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
