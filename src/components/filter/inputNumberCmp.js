import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const InputNumberCmp = ({ curValue, onChange, minValue, maxValue }) => {
    return (
        <TextInput style={styles.input}
            keyboardType='number-pad'
            // defaultValue='0'
            onChange={(value) => {
                let text = value.nativeEvent.text;
                if (isNaN(text)) text=curValue;
                let num = Number(text);
                if ((num<0) || (num>maxValue)) num=curValue;
                console.log('🚀 ~ file: inputNumberCmp.js ~ line 12 ~ InputNumberCmp ~ text', text);
                onChange(num);
            }}

            value={curValue}
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
