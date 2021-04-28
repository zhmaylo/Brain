import React from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { HeaderBack } from '../components/header/HeaderBackCmp';
import { SETTING_HEADER_TITLE } from '../constants/settingConst';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { WINDOW_HEIGHT } from '../constants/otherConst';

export default function SettingScr(props) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={SETTING_HEADER_TITLE} />
            <View style={styles.itemApiKey}>
                <Text>SettingScreen</Text>
                <TextInput
                    style={styles.inputApiKey}
                    // keyboardType='default'
                    value={'Input ApiKey'}

                />
            </View>
            <FooterBack props={props} footerName={FOOTER_BACK_TITLE} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#f0f0f0",
        // backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    itemApiKey: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: 'white',
        paddingHorizontal: 5,
        height: 50,
    },
    inputApiKey: {
        borderColor: "#f0f0f0",
        color: 'black',
        // backgroundColor: '',
        borderWidth: 1,
        height: 50,
        width: 250,
        backgroundColor: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});
