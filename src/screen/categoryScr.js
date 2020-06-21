
import React, { useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";

import { NUMCOLUMN } from './../constants/categoryConst';
import { WINDOW_WIDTH } from './../constants/otherConst';

import { getMainListCategory } from './../api/category/category';



export default function categoryScr(props) {
    const { state, dispatch } = useContext(ContextApp);

    const SymbolChildren = (isChildren) => {
        if (isChildren) return '>'
        else return "";
    }

    const ItemCat = ({ item }) => {
        return (
            <View>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.title}>{item.name} </Text>
                    <Text style={styles.symbCat}>{item.isChildren ? '>' : ''} </Text>
                </TouchableOpacity>
            </View>
        );
    }

    // let catList2 = {...state};
    // let catList = {...catList2.categoryListRdc.categoryList};
    let catList2 = state.categoryListRdc.categoryList.filter(item => item.parentID == 1);
    let catList = {...catList2};
    // catList[0].isChildren = 123;
    catList[0].isChildren = 123;
    state.categoryListRdc.categoryList[0].isChildren = 999;

    console.log("catList[0]", catList[0].isChildren);
    console.log("state...categoryList[0]", state.categoryListRdc.categoryList[0].isChildren);


    let dataCat = getMainListCategory(state.categoryListRdc.categoryList, dispatch);
    const ItemCategory = () => {

        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={NUMCOLUMN}
                    horizontal={false}
                    data={dataCat}
                    renderItem={({ item }) => <ItemCat item={item} />}
                    keyExtractor={item => item.categoryID + ""}
                />

            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ItemCategory />
            {/* <Text>CategoryScreen</Text>
            <Button
                onPress={() => props.navigation.navigate('MainScreen')}
                title="Back"
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 18,
    },
    symbCat: {
        fontSize: 30,
    },
});


