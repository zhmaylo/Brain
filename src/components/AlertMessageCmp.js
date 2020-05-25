import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

export const AlertMessageCmp = ({message}) => {
    return (
        <View style={styles.container}>
            <Text>Alert</Text>
            <Text id="errMes">{message} </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4ba37b',
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 100
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
