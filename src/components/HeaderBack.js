import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../constants/otherConst';
import { TEXT_INPUT_PLACEHOLDER, ICON_HEADER, HEADER_BUTTON_SIZE } from '../constants/headerConst';

export const HeaderBack = ( {props, headerName} ) => {

    return (
        <View style={styles.container}>
        
            <TouchableOpacity
                onPress={() => { props.navigation.goBack() }}
            >
                <Image
                    style={styles.menuImage}
                    // style={{ width: 26, height: 26, marginRight: 20 }}
                    source={ICON_HEADER[0].iconSource}
                />
            </TouchableOpacity>
            <Text alignItems='center' width={300}>{headerName}</Text>
           
        </View >
    )
}


const styles = StyleSheet.create({
    menuImage: {
        width: HEADER_BUTTON_SIZE,
        height: HEADER_BUTTON_SIZE,
    },

    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: WINDOW_WIDTH,
        height: HEADER_BUTTON_SIZE,
        backgroundColor: '#81b0ff',
        paddingVertical: 3,
        paddingHorizontal: 3,
        opacity: 0.8,
    }
})
