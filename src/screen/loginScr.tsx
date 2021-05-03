import React, { useContext, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { LOGIN_TITLE, PASSWORD_TITLE } from '../constants/settingConst';
import { SetValueCmp } from '../components/setting/SetValueCmp';
import { LOGIN_KEY, PASSWORD_KEY } from '../constants/storageConst';
import { setLogin, setPassMD5, LOGIN_DEFAULT } from '../constants/authorizConst';
import { ContextApp } from '../reducers/unionRdc';
import { LOGIN, LOGIN_ERROR, PASSWORD, PASS_MD5 } from '../constants/actionConst';
let md5 = require("md5");
import { checkGetSID } from '../api/login/login';
import { getValueStore } from '../api/setting/setting';
import { ERRORS_RESPONSE } from '../constants/errorConst';

export default function LoginScr(props: any) {
    const { state, dispatch } = useContext(ContextApp);
    useEffect(() => {
        getValueStore(LOGIN_KEY, LOGIN_DEFAULT).then((value) => {
            dispatch({ type: LOGIN, payload: value });
            setLogin(value);
            let sid = checkGetSID(dispatch);
            if (sid === undefined) dispatch({ type: LOGIN_ERROR, payload: ERRORS_RESPONSE[7] });

            getValueStore(PASSWORD_KEY).then((value) => {

            });

        }    
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.itemGroup}>
                {/* //login input */}
                <SetValueCmp
                    title={LOGIN_TITLE}
                    keyStore={LOGIN_KEY}
                    valueDef={LOGIN_DEFAULT}
                    onChangeValue={(value: string) => {
                        dispatch({ type: LOGIN, payload: value });
                        setLogin(value);
                    }}
                />
                {/* //password input */}
                <SetValueCmp
                    title={PASSWORD_TITLE}
                    keyStore={PASSWORD_KEY}
                    valueDef={""}
                    secure={true}
                    onChangeValue={(password: string) => {
                        dispatch({ type: PASSWORD, action: password });
                        let pass_md5 = md5(password);
                        dispatch({ type: PASS_MD5, payload: pass_md5 });
                        setPassMD5(pass_md5);
                        let sid = checkGetSID(dispatch);

                    }}
                />

                <Text style={styles.md5} >
                    MD5: {state.loginRdc.pass_md5}
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
