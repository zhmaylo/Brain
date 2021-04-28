import React from 'react';
import { View, StyleSheet, Button, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { WINDOW_WIDTH } from '../../constants/otherConst';
import { ICON_FOOTER } from '../../constants/footerConst';
import { buttonViewProd } from '../../api/footer/buttonView';
import { SETTING_SCR, SYNC_DATA_SCR } from '../../constants/appNavigatorConst';

//main screen footer
const itemFooter = (iconSource: any, iconName: string, iconUrl: any) => {

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


export const FooterCmp = (props, state, dispatch) => {
    // console.log('FooterCmp.menuUrl', menuUrl);
    return (
        <View style={styles.container}>
            {itemFooter(ICON_FOOTER[2 - state.numColumProdRdc.numColumProd].iconSource, ICON_FOOTER[0].iconName, () => {
                let num = buttonViewProd(state.numColumProdRdc.numColumProd);
                dispatch({ type: 'NUM_COLUM_PROD', payload: num });
            })}
            {/* {itemFooter(ICON_FOOTER[2].iconSource, ICON_FOOTER[2].iconName, () => { props.navigation.navigate(SYNC_DATA_SCR) })} */}
            {itemFooter(ICON_FOOTER[3].iconSource, ICON_FOOTER[3].iconName, () => { props.navigation.navigate(SETTING_SCR) })}
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
        // paddingTop: 10,
        paddingVertical: 10,
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
