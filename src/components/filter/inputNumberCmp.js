import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const InputNumberCmp = (curValue) => {
    return (
        <TextInput style={styles.input}
            keyboardType='number-pad'
            // defaultValue='0'
            onChange={(value) => {
                console.log("value2", value.nativeEvent.text);
            } }
            value={'1234'}
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
