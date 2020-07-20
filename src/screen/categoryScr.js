
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";

import { NUM_COLUMN, SIGN_DEEP } from './../constants/categoryConst';
import { WINDOW_WIDTH } from './../constants/otherConst';

import { getMainListCategory, getListCategory } from './../api/category/catView';
import { getProductsList } from './../api/products/products';
import { SpinnerGif, SpinnerСmp } from './../components/SpinnerCmp';




export default function categoryScr(props) {
    // console.log("Start categoryScr");
    const { state, dispatch } = useContext(ContextApp);
    let dataCat;
    let catList = state.categoryListRdc.categoryList;
    let viewList = state.viewListCatRdc.viewListCat;
    // console.log("viewList", viewList);
    useEffect(() => {
        dataCat = getMainListCategory(catList);
        dispatch({ type: 'VIEW_LIST_CAT', payload: dataCat });
    }, []);

    const ItemCat = ({ item }) => {
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



    const ListCategory = (state) => {

        return (

            <View style={styles.container}>

                <FlatList
                    numColumns={NUM_COLUMN}
                    horizontal={false}
                    data={viewList}
                    // onRefresh={() => onRefresh}
                    // refreshing={true}
                    renderItem={({ item }) => <ItemCat item={item} />}
                    keyExtractor={item => item.categoryID + ""}
                />
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
        backgroundColor: 'white',
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


