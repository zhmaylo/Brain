import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { WINDOW_WIDTH } from '../../constants/otherConst';
import { ICON_HEADER, HEADER_BUTTON_SIZE } from '../../constants/headerConst';

import { CATEG_SCR } from '../../constants/appNavigatorConst';
import { SORT_SCR, FILTER_SCR } from './../../constants/appNavigatorConst';
import { SearchCmp } from '../search/SearchCmp';

export const HeaderCmp = ({ props, dispatch }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { props.navigation.navigate(CATEG_SCR) }}
            >
                <Image
                    style={styles.menuImage}
                    source={ICON_HEADER[0].iconSource}
                />
            </TouchableOpacity>
            <View style={styles.searchCmp} >
                <SearchCmp
                    onChangeRequest={(type: any, payload: any) => {
                        dispatch({ type: type, payload: payload });
                    }}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate(SORT_SCR);
                }}
            >
                <Image
                    style={styles.menuImage}
                    source={ICON_HEADER[1].iconSource}
                >
                </Image>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate(FILTER_SCR);
                }}
            >
                <Image
                    style={styles.menuImage}
                    source={ICON_HEADER[2].iconSource}
                >
                </Image>
            </TouchableOpacity>
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
        // paddingVertical: 3,
        paddingTop: 3,
        paddingHorizontal: 3,
        opacity: 0.8,
    },
    searchCmp: {
        width: WINDOW_WIDTH - HEADER_BUTTON_SIZE * 4,
    }
})
