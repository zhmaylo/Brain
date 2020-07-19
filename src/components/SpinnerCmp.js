import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { SPINNER_GIF, SPINNER_MES } from './../constants/spinnerConst';

// spinner component
// toggle=true - spinner show 
// toggle=false - spinner hide 
export const SpinnerGif = (toggle) => {
    if (toggle)
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={SPINNER_GIF}
                />
                <Text>{SPINNER_MES}</Text>
            </View>)
    else return;
}

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        flex: 1,
        // position: 'relative',
        
        justifyContent: "center",
        alignItems: "center",
        
    },
    image: {
        width: 30,
        height: 30,
    },

})
