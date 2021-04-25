import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { WINDOW_WIDTH } from '../../constants/otherConst';
import { ICON_BACK, HEADER_BUTTON_SIZE } from '../../constants/headerConst';

export const HeaderBack = ({ props, headerName }) => {

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => { props.navigation.goBack() }}
            >
                <Image
                    style={styles.menuImage}
                    // style={{ width: 26, height: 26, marginRight: 20 }}
                    source={ICON_BACK}
                />
            </TouchableOpacity>
            <View style={styles.textHeader}>
                <Text style={styles.textSize}>
                    {headerName}
                </Text>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    menuImage: {
        width: HEADER_BUTTON_SIZE,
        height: HEADER_BUTTON_SIZE,
    },

    container: {
        flexDirection: "row",
        // justifyContent: "space-between",
        // alignItems: "flex-start",
        width: WINDOW_WIDTH,
        height: HEADER_BUTTON_SIZE + 15,
        paddingTop: 10,
        paddingHorizontal: 3,
        opacity: 0.8,
    },

    textHeader: {
        flex: 1,
        
        // height: HEADER_BUTTON_SIZE + 10,
        justifyContent: "center",
        alignItems: "center",
    },
    textSize: {
        fontSize: 18,
        paddingBottom: 10,
    }

    
})
