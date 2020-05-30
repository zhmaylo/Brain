import React from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { WINDOW_WIDTH } from '../constants/other';


export const FooterCmp = (menuUrl) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { menuUrl() }}
            >
                <Image
                    style={styles.menuImage}
                    source={require('./../icons/th-large-solid.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity
                // style={styles.button}
                onPress={() => { menuUrl() }}
            >
                <Image
                    style={styles.menuImage}
                    source={require('./../icons/balance-scale-solid.png')}
                >
                </Image>
            </TouchableOpacity>

            <TouchableOpacity
                // style={styles.button}
                onPress={() => { menuUrl() }}
            >
                <Image
                    style={styles.menuImage}
                    source={require('./../icons/star-regular.png')}
                >
                </Image>
            </TouchableOpacity>

            <TouchableOpacity
                // style={styles.button}
                onPress={() => { menuUrl() }}
            >
                <Image
                    style={styles.menuImage}
                    source={require('./../icons/shopping-basket-solid.png')}
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
        resizeMode: "contain",
    },
    
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        width: WINDOW_WIDTH,
        paddingVertical: 3,
        paddingHorizontal: 3,

    }
})
