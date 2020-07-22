import React from 'react';
import { View, StyleSheet, Text, Image, } from 'react-native';
import { SPINNER_GIF, SPINNER_MES } from './../constants/spinnerConst';

// spinner component
// volume - current spiner volume
// max - max spiner volume
export const SpinnerСmp = (volume, max) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={SPINNER_GIF}
            />
            <Text>{SPINNER_MES}</Text>
            <Text> {~~((volume * 100) / max)}% / 100%</Text>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 30,
        height: 30,
    },

})
