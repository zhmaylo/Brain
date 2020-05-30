import React from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, Image } from 'react-native';
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
                    source={require('./../icons/Very-Basic-Menu-icon.png')}
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
                // placeholder= "Search"
                inlineImagePadding='10'
                inlineImageLeft='./../icons/Search-icon.png'>
            </TextInput>
            <TouchableOpacity
                // style={styles.button}
                onPress={() => { menuUrl() }}
            >
                <Image
                    style={styles.menuImage}
                    source={require('./../icons/Data-Empty-Filter-icon.png')}
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
        // backgroundColor: 'green',
      
        width: buttonSize-6,
        height: buttonSize-6,
        marginLeft: buttonSize+9,
        marginTop: 4,
        // resizeMode: 'stretch',
        position: 'absolute',
        opacity: 0.4,
        zIndex: 1000, 
    },
    search: {
        width: WINDOW_WIDTH,
        height: buttonSize,
        backgroundColor: "#e8e8e8",
        borderRadius: 30,
        paddingLeft: 36,
        marginHorizontal: 5,

    },
    button: {
        backgroundColor: 'white',
        width: buttonSize,
        height: buttonSize
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
