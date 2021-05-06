import React, { useContext, useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, View, StyleSheet } from 'react-native';
import { LOGIN_TITLE, PASSWORD_TITLE, TITLE_BTN_ENTER } from '../constants/loginConst';
import { SetValueCmp } from '../components/login/SetValueCmp';
import { LOGIN_KEY, PASSWORD_KEY } from '../constants/storageConst';
import { ContextApp } from '../reducers/unionRdc';
import { LOGIN, PASSWORD, SPINER_TOGGLE } from '../constants/actionConst';
import { getValueStore, setAutoriz } from '../api/login/login';
import { SpinerСmp } from '../components/spiner/SpinerCmp';
import { SPINER_MES_CHECK } from '../constants/spinerConst';
import { ButtonCmp } from '../components/login/ButtonCmp';
import { MAIN_SCR } from '../constants/appNavigatorConst';
import { WINDOW_HEIGHT } from '../constants/otherConst';
import { DEV_MODE } from '../constants/devModeConst';

export default function LoginScr(props: any) {
    const { state, dispatch } = useContext(ContextApp);
    useEffect(() => {

        getValueStore(LOGIN_KEY).then((value) => {
            setAutoriz(dispatch, LOGIN, value);
            getValueStore(PASSWORD_KEY).then((value) => {
                setAutoriz(dispatch, PASSWORD, value);
            });
        })

    }, []);
    if (DEV_MODE) props.navigation.navigate(MAIN_SCR);
    let active = state.loginRdc.login_error.code;
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.itemGroup}>
                {/* //login input */}
                <SetValueCmp
                    title={LOGIN_TITLE}
                    keyStore={LOGIN_KEY}
                    onChangeValue={(login: string) => {
                        setAutoriz(dispatch, LOGIN, login);
                    }}
                />
                {/* //password input */}
                <SetValueCmp
                    title={PASSWORD_TITLE}
                    keyStore={PASSWORD_KEY}
                    secure={true}
                    onChangeValue={(password: string) => {
                        setAutoriz(dispatch, PASSWORD, password);
                    }}
                />
                {/* <Text style={styles.md5} >
                    MD5: {state.loginRdc.pass_md5}
                </Text> */}
                <Text style={styles.md5} >
                    {state.loginRdc.login_error.message}
                </Text>
                <ButtonCmp
                    title={TITLE_BTN_ENTER}
                    active={(active == 0) ? true : false}
                    onPressBtn={() => { if (active == 0) props.navigation.navigate(MAIN_SCR) }}

                />

                <View style={styles.spiner}>
                    {state.spinerToggleRdc.spinerToggle &&
                        <SpinerСmp spiner_mes={SPINER_MES_CHECK} />
                    }
                </View>

            </View>
        </SafeAreaView >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    itemGroup: {
        flex: 1,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: WINDOW_HEIGHT / 8,
    },
    md5: {
        fontSize: 12,
        fontWeight: "600",
    },
    spiner: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',

    }

});
