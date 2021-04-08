
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";

import { NUM_COLUMN, SIGN_DEEP } from './../constants/categoryConst';
import { WINDOW_WIDTH } from './../constants/otherConst';

import { getMainListCategory, getListCategory } from './../api/category/catView';
import { getProductsList } from './../api/products/products';
import { sortBySwitch } from './../api/sort';
import { clone } from './../api/clone';
import { HeaderBack } from './../components/header/HeaderBackCmp';
import * as storage from '../api/storage';
import { RECENT_CATEG_KEY } from './../constants/storageConst';

export default function categoryScr(props) {
    const { state, dispatch } = useContext(ContextApp);
    let dataCat;
    let catList = state.categoryListRdc.categoryList;
    let viewList = state.viewListCatRdc.viewListCat;

    useEffect(() => {
        let cleanupFunction = true;
        dataCat = getMainListCategory(catList);
        console.log('dataCat', dataCat);
        if (cleanupFunction) {
            dispatch({ type: 'VIEW_LIST_CAT', payload: dataCat });
            console.log('cleanupFunction', cleanupFunction);
        };
        return () => cleanupFunction = false;
    }, [!state.isAppInitRdc.isAppInit]);

    const ItemCat = ({ item }) => {
        return (
            <SafeAreaView>
                <TouchableOpacity style={styles.item}
                    onPress={() => {

                        dataCat = getListCategory(catList, item);

                        if (!dataCat) {
                            // save ID current category
                            storage.storeData(RECENT_CATEG_KEY, item.categoryID);
                            //
                            getProductsList(item.categoryID, state.sessionSidRdc.sessionSid, dispatch)
                                .then((productsList) => {
                                    console.log("getProductsList => ", productsList);
                                    productsList = sortBySwitch(productsList, clone(state.sortSwitchArrRdc.sortSwitchArr));

                                    dispatch({ type: 'PRODUCTS_LIST', payload: productsList });
                                })
                            props.navigation.navigate("MainScreen");
                        };
                        if (dataCat) dispatch({ type: 'VIEW_LIST_CAT', payload: dataCat });
                    }
                    }
                >
                    <Text style={styles.title}>{item.name} </Text>
                    <Text style={styles.symbCat}>{item.isChildren ? SIGN_DEEP : ''} </Text>

                </TouchableOpacity>

            </SafeAreaView>
        );
    }



    const ListCategory = (state) => {

        return (

            <View style={styles.container}>
                {/* <HeaderBack props={props} headerName={CATEG_HEADER_TITLE} /> */}
                <HeaderBack props={props} headerName="" />
                <FlatList
                    numColumns={NUM_COLUMN}
                    horizontal={false}
                    data={viewList}
                    // onRefresh={() => onRefresh}
                    // refreshing={true}
                    renderItem={({ item }) => <ItemCat item={item} />}
                    keyExtractor={item => item.categoryID + ""}
                />
                {/* <FooterBack props={props} headerName={CATEG_HEADER_TITLE} /> */}
            </View>
        )

    }
    return (
        <View style={styles.container}>
            <ListCategory />
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

        backgroundColor: 'white',
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


