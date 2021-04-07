import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


// InputNumberCmp - number input
export const InputNumberCmp = ({ curValue = 0, onChange, minValue, maxValue }) => {
    
    return (
        <TextInput style={styles.input}
            keyboardType='number-pad'
            value={curValue+''}
            onChange={(value) => {
                let text = value.nativeEvent.text;
                if (isNaN(text)) text=curValue;
                let num = Number(text);
                if ((num<minValue) || (num>maxValue)) num=curValue;
                 onChange(num);
            }}

 
        />


    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderColor: 'lightgrey',
        borderWidth: 1,
        textAlign: 'center',
    }
}
)
