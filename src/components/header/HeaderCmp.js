import React from '../../../node_modules/react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { WINDOW_WIDTH } from '../../constants/otherConst';
import { TEXT_INPUT_PLACEHOLDER, ICON_HEADER, HEADER_BUTTON_SIZE } from '../../constants/headerConst';

import { CATEG_SCR } from '../../constants/appNavigatorConst';
import { SORT_SCR, FILTER_SCR } from './../../constants/appNavigatorConst';
import SearchScr from '../../screen/SearchScr';

export const HeaderCmp = (props) => {

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

            {/* <TextInput
                style={styles.search}
                placeholder={TEXT_INPUT_PLACEHOLDER}
            >
            </TextInput> */}

            <SearchScr/>

            <TouchableOpacity className="button_sort"
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
        paddingVertical: 3,
        paddingHorizontal: 3,
        opacity: 0.8,
    }
})
