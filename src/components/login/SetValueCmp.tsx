import React from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";
import { getValueStore, setValueStore } from '../../api/login/login';
import { use_State } from '../../api/login/use_State';


export const SetValueCmp = ({
    title, keyStore, onChangeValue,
    secure = false }) => {

    let { value, setValue } = use_State('');
    getValueStore(keyStore).then((value: string) => { setValue(value) });

    return (
        <View style={styles.itemValue}>
            <Text style={styles.titleValue}> {title}  </Text>
            <TextInput
                style={styles.inputValue}
                defaultValue={value}

                secureTextEntry={secure}
                onChangeText={(value) => {
                    // (secure == false) && (value = value.toLowerCase());
                    setValueStore(keyStore, value);
                    onChangeValue(value);
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    itemValue: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 5,
        width: 400,
    },
    titleValue: {
        fontSize: 18,
        fontWeight: "600",
        width: 100,
    },
    inputValue: {
        borderColor: "#f0f0f0",
        color: 'black',
        borderWidth: 2,
        height: 50,
        width: 250,
        backgroundColor: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',

        fontSize: 18,
        fontWeight: "600",
    }
})

