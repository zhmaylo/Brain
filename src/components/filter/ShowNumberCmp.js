import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

// ShowNumberCmp - number input
export const ShowNumberCmp = ({ curValue = 0 }) => {

    return (
        <TextInput style={styles.input}
            keyboardType='number-pad'
            value={curValue + ''}
            editable={false}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 160,
        borderColor: 'lightgrey',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "700",
    }
})
