import React from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";
import { WINDOW_WIDTH } from '../../constants/otherConst';

export const SetValueCmp = ({title} ) => {
    return (
        <View style={styles.itemValue}>
            <Text style={styles.titleValue}> {title}  </Text>
            <TextInput
                style={styles.inputValue}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    itemValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 5,
    },
    titleValue: {
        fontSize: 18,
        fontWeight: "600",
    },
    inputValue: {
        borderColor: "#f0f0f0",
        color: 'black',
        borderWidth: 2,
        height: 50,
        width: WINDOW_WIDTH / 1.69,
        backgroundColor: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',

        fontSize: 18,
        fontWeight: "600",
    }
})