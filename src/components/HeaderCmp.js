import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { WINDOW_WIDTH } from './../constants/otherConst';
import { TEXT_INPUT_PLACEHOLDER, ICON_HEADER } from './../constants/headerConst';


export const HeaderCmp = (menuUrl) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { menuUrl() }}
            >
                <Image
                    style={styles.menuImage}
                    // style={{ width: 26, height: 26, marginRight: 20 }}
                    source={ICON_HEADER [0].iconSource}
                />
            </TouchableOpacity>

            {/* <Image
                style={styles.imageFind}
                // style={{ backgroundColor: "green" }}
                source={require('./../icons/Search-icon.png')}
            >
            </Image> */}
            <TextInput
                style={styles.search}
                placeholder= {TEXT_INPUT_PLACEHOLDER}
                >
            </TextInput>
            <TouchableOpacity
                onPress={() => { menuUrl() }}
            >
                <Image
                    style={styles.menuImage}
                    source={ICON_HEADER [1].iconSource}
                >
                </Image>
            </TouchableOpacity>
            
        </View >
    )
}


const buttonSize = 30;
const styles = StyleSheet.create({
    menuImage: {
        width: buttonSize,
        height: buttonSize,
    },

    search: {
        width: WINDOW_WIDTH-2*buttonSize-20,
        height: buttonSize,
        borderWidth: 2,
        paddingLeft: 4,
        marginHorizontal: 5,

    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: WINDOW_WIDTH,
        paddingVertical: 3,
        paddingHorizontal: 3,
        opacity: 0.8
    }
})