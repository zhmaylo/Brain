import React from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";
import { getData, storeData } from '../../api/storage/storage';
import { API_KEY_DEFAULT } from '../../constants/authorizConst';
import { API_KEY_STORAGE, KEY_MISSING } from '../../constants/storageConst';

// let apiKey = getData(API_KEY_STORAGE) == null ? API_KEY :( storeData(API_KEY_CATEG_KEY, API_KEY) KEY_MISSING);

const getApiKey = () => {
    let apiKey = getData(API_KEY_STORAGE).then((data) => {
        if (data == null) return API_KEY_DEFAULT
        storeData(API_KEY_STORAGE, API_KEY_DEFAULT);
        return data;
    });
};

export const SettingApiKey = ({ title }) => {
    return (
        <View style={styles.itemApiKey}>
            <Text style={styles.title}> {title}  </Text>
            <TextInput
                style={styles.inputApiKey}
            // keyboardType='default'
            // defaultValue={''}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    itemApiKey: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
    },
    inputApiKey: {
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