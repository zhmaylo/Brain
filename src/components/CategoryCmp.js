
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import { NUM_COLUMN, SIGN_DEEP, CATEG_HEADER_TITLE } from '../constants/categoryConst';
import { WINDOW_WIDTH } from '../constants/otherConst';

import { getMainListCategory, getListCategory } from '../api/category/catView';
import { getProductsList } from '../api/products/products';
import { sortBySwitch } from '../api/sort';
import { clone } from '../api/clone';

export const CategoryCmp = ({ item, state, dispatch }) => {
    let dataCat;
    console.log('CategoryCmp.state=>', state);
    let catList = state.categoryListRdc.categoryList;
    return (
        <View>
            <TouchableOpacity style={styles.item}
                onPress={() => {

                    // console.log(item);
                    dataCat = getListCategory(catList, item);

                    if (!dataCat) {
                        getProductsList(item.categoryID, state.sessionSidRdc.sessionSid, dispatch)
                            .then((productsList) => {
                                console.log("getProductsList => ", productsList);
                                productsList = sortBySwitch(productsList, clone(state.sortSwitchArrRdc.sortSwitchArr));
                                dispatch({ type: 'PRODUCTS_LIST', payload: productsList });

                            })
                        props.navigation.navigate("MainScreen");
                    };
                    // console.log(dataCat);
                    // console.log(catList);
                    if (dataCat) dispatch({ type: 'VIEW_LIST_CAT', payload: dataCat });
                }
                }
            >
                <Text style={styles.title}>{item.name} </Text>
                <Text style={styles.symbCat}>{item.isChildren ? SIGN_DEEP : ''} </Text>

            </TouchableOpacity>

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        backgroundColor: "#F0F0F0",
        justifyContent: "flex-start"
    },
    item: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        width: WINDOW_WIDTH - 5,
        height: 50,

        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#dfdfdf',
        padding: 3,

        marginHorizontal: 6,
        marginRight: 6,

    },
    title: {
        fontSize: 16,
    },
    symbCat: {
        fontSize: 30,
    },
});


