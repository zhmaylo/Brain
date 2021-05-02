import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { LOGIN_TITLE, PASSWORD_TITLE } from '../constants/settingConst';
import { SetValueCmp } from '../components/setting/SetValueCmp';
import { LOGIN_KEY, PASSWORD_KEY } from '../constants/storageConst';
import { getLogin, LOGIN_DEFAULT, PASSMD5_DEFAULT } from '../constants/authorizConst';
import { ContextApp } from '../reducers/unionRdc';


export default function LoginScr(props: any) {
    const { state, dispatch } = useContext(ContextApp);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.itemGroup}>
                {/* //login input */}
                <SetValueCmp
                    title={LOGIN_TITLE}
                    keyStore={LOGIN_KEY}
                    valueDef={LOGIN_DEFAULT}
                    onChange={(value: string) => {
                        getLogin(value);
                    }}
                />
                {/* //password input */}
                <SetValueCmp
                    title={PASSWORD_TITLE}
                    keyStore={PASSWORD_KEY}
                    valueDef={""}
                    onChange={(value: string) => {
                        getLogin(value);
                    }}
                />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    itemGroup: {
        flex: 1,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});
