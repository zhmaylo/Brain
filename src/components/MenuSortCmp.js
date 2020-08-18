import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";


export const MenuSortCmp = ({ sortButtonPress, dispatch }) => {
    console.log("MenuSortCmp");
    return (
        <View style={styles.container}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Text>
        </View>
    );
};




const styles = StyleSheet.create({

    container: {
        flex: 1,
        // paddingTop: 20,
        // position: 'absolute',
        // justifyContent: 'flex-end',
        // backgroundColor: "#ecf0f1",
        // padding: 5,
        // marginLeft: WINDOW_WIDTH - 120,
        // marginRight: 10,
        // marginTop: HEADER_BUTTON_SIZE + 10,
        // opacity: 1,
        zIndex: 1,
    }
});

