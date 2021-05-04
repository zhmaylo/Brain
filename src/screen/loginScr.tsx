import React, { useContext, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { LOGIN_TITLE, PASSWORD_TITLE } from '../constants/loginConst';
import { SetValueCmp } from '../components/login/SetValueCmp';
import { LOGIN_KEY, PASSWORD_KEY } from '../constants/storageConst';
import { ContextApp } from '../reducers/unionRdc';
import { LOGIN, PASSWORD } from '../constants/actionConst';
import { getValueStore, setAutoriz } from '../api/login/login';

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
                <Text style={styles.md5} >
                    MD5: {state.loginRdc.pass_md5}
                </Text>
                <Text style={styles.md5} >
                    sid test: {state.loginRdc.login_error.message}
                </Text>
            </View>
        </SafeAreaView >
    );
}

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
    },
    md5: {
        fontSize: 10,
        fontWeight: "600",
    }
});
