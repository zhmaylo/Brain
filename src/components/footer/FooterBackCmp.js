import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { WINDOW_WIDTH } from '../../constants/otherConst';
import { ICON_BACK, HEADER_BUTTON_SIZE } from '../../constants/headerConst';

export const FooterBack = ({ props, footerName }) => {

    return (
        <TouchableOpacity
            onPress={() => { props.navigation.goBack() }}
        >
            <View style={styles.container}>
                <Text style={styles.textSize}>
                    {footerName}
                </Text>
            </View >
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: WINDOW_WIDTH,
        height: HEADER_BUTTON_SIZE + 10,
        paddingHorizontal: 3,
        opacity: 0.8,
    },

    textSize: {
        fontSize: 18,
        paddingBottom: 5,
    }


})
