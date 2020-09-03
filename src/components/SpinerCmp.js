import React from 'react';
import { View, StyleSheet, Text, Image, } from 'react-native';
import { SPINER_GIF, SPINER_MES } from './../constants/spinerConst';

// spinner component
// volume - current spiner volume
// max - max spiner volume
export const SpinerСmp = () => {
    // console.log("SpinerСmp. volume => ", volume);
    // console.log("SpinerСmp. max => ", max);
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={SPINER_GIF}
            />
            <Text>{SPINER_MES}</Text>
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
