import React from 'react';
import { View, StyleSheet, Text, Image, } from 'react-native';
import { SPINNER_GIF, SPINNER_MES } from './../constants/spinnerConst';

// spinner component
// toggle=true - spinner show 
// toggle=false - spinner hide
// volume - current spiner volume
// max - max spiner volume
export const SpinnerСmp = (state) => {
    let toggle = state.state.spinerToggleRdc.spinerToggle;
    let volume = state.state.spinerVolumeRdc.spinerVolume;
    let max = state.state.spinerMaxRdc.spinerMax;
    // if (toggle)
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={SPINNER_GIF}
                />
                <Text>{SPINNER_MES}</Text>
                <Text> {~~((volume*100)/max)}% / 100%</Text>
            </View>)
    // else return;
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        flexDirection: 'column',
        // position: 'relative',
        // position: 'absolute',
        justifyContent: "center",
        alignItems: "center",

    },
    image: {
        width: 30,
        height: 30,
    },

})
