import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from './../constants/otherConst';
import { TEXT_INPUT_PLACEHOLDER, ICON_HEADER, HEADER_BUTTON_SIZE } from './../constants/headerConst';

import { MenuSortCmp} from './MenuSortCmp';


export const HeaderCmp = (productsList, menuUrl, dispatch) => {

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
                onPress={() => {
                                MenuSortCmp ();
                                console.log(' onPress=>MenuSortCmp called');
                                // <MenuSortCmp />
                                // let prodList = buttonSort(productsList) 
                                
                                // dispatch({ type: 'PRODUCTS_LIST', payload: prodList })
                                }
                        }
            >
                <Image
                    style={styles.menuImage}
                    source={ICON_HEADER [1].iconSource}
                >
                </Image>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { menuUrl() }}
            >
                <Image
                    style={styles.menuImage}
                    source={ICON_HEADER [2].iconSource}
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

    search: {
        width: WINDOW_WIDTH-3*HEADER_BUTTON_SIZE-20,
        height: HEADER_BUTTON_SIZE,
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
        opacity: 0.8,
    }
})
