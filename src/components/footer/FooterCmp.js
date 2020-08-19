import React, { useContext } from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { WINDOW_WIDTH } from '../../constants/otherConst';
import { ICON_FOOTER } from '../../constants/footerConst';
import { buttonViewProd } from '../../api/footer/buttonView';

//main screen footer
const itemFooter = (iconSource, iconName, iconUrl) => {

    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => iconUrl()}
            >
                <Image
                    style={styles.menuImage}
                    source={iconSource}
                />
                <Text style={styles.buttonText}>{iconName}</Text>
            </TouchableOpacity>
        </View>
    )
}


export const FooterCmp = (menuUrl, state, dispatch) => {

    return (
        <View style={styles.container}>
            {itemFooter(ICON_FOOTER[2-state.numColumProdRdc.numColumProd].iconSource, ICON_FOOTER[0].iconName, () => {
                let num = buttonViewProd(state.numColumProdRdc.numColumProd);
                dispatch({ type: 'NUM_COLUM_PROD', payload: num });
            })}
            {/* dispatch({ type: 'NUM_COLUM_PROD', payload: buttonViewProd(state.numColumProdRdc.numColumProd) }))} */}

            {itemFooter(ICON_FOOTER[2].iconSource, ICON_FOOTER[2].iconName, menuUrl)}
            {itemFooter(ICON_FOOTER[3].iconSource, ICON_FOOTER[3].iconName, menuUrl)}
            {itemFooter(ICON_FOOTER[4].iconSource, ICON_FOOTER[4].iconName, menuUrl)}
            {itemFooter(ICON_FOOTER[5].iconSource, ICON_FOOTER[5].iconName, menuUrl)}
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
        paddingTop: 15,
        // paddingVertical: 3,
        paddingHorizontal: 3,
        opacity: 0.8
    },

    button: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        fontSize: 4,
    },
    buttonText: {
        fontSize: 10
    }

})
