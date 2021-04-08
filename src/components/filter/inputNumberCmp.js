import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { inputNumberCheck } from '../../api/filter/filter';


// InputNumberCmp - number input
export const InputNumberCmp = ({ curValue = 0, onChange, minValue, maxValue }) => {

    return (
        <TextInput style={styles.input}
            keyboardType='number-pad'
            value={curValue + ''}
            onChange={(value) => {
                value = inputNumberCheck(value, curValue, minValue, maxValue);
                onChange(value);
            }}
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
    }
})
