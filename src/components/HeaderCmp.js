import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { WINDOW_WIDTH } from './../constants/other';


export const HeaderCmp = (menuUrl) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { menuUrl() }}
            >
                <Image
                    style={styles.menuImage}
                    // style={{ width: 26, height: 26, marginRight: 20 }}
                    source={require('./../icons/bars-solid.png')}
                />
            </TouchableOpacity>

            <Image
                style={styles.imageFind}
                // style={{ backgroundColor: "green" }}
                source={require('./../icons/Search-icon.png')}
            >
            </Image>
            <TextInput
                style={styles.search}
                placeholder= "Search"
                >
            </TextInput>
            <TouchableOpacity
                onPress={() => { menuUrl() }}
            >
                <Image
                    style={styles.menuImage}
                    source={require('./../icons/filter-solid.png')}
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
    imageFind: {
        width: buttonSize-10,
        height: buttonSize-10,
        marginLeft: buttonSize+13,
        marginTop: 8,
        position: 'absolute',
        // position: 'relative',
        opacity: 0.3,
        zIndex: 100, 
    },
    search: {
        width: WINDOW_WIDTH-2*buttonSize-20,
        height: buttonSize,
        backgroundColor: "#e8e8e8",
        borderRadius: 30,
        paddingLeft: 36,
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
    }
})
