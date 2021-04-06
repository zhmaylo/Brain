import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export const InputNumberCmp = (val) => {
    return (
        <TextInput style={styles.input}
            keyboardType='number-pad'
            defaultValue='0'
            onChangeText={(val) => { console.log("val", val) }}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderColor: 'lightgrey',
        borderWidth: 1,
        textAlign: 'right',
    }
}
)
