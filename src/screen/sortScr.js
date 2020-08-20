import React, { useState, useContext } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, FlatList } from 'react-native';

import { HeaderBack } from '../components/header/HeaderBackCmp';
import { SORT_HEADER_TITLE, SORT_NAME_ARR } from './../constants/sortConst';
import { FooterBack } from './../components/footer/FooterBackCmp';
import { FOOTER_BACK_TITLE } from './../constants/footerBackConst';
import { WINDOW_WIDTH } from './../constants/otherConst';
import { SortItemCmp } from './../components/SortItemCmp';
import { View } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";

export default function sortScr(props) {
    const { state, dispatch } = useContext(ContextApp);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={SORT_HEADER_TITLE} />
            <View style={styles.item} >
                <FlatList
                    numColumns={1}
                    horizontal={false}
                    data={SORT_NAME_ARR}
                    // onRefresh={() => onRefresh}
                    // refreshing={true}
                    renderItem={({ item }) => <SortItemCmp item={item} dispatch={dispatch} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <FooterBack props={props} footerName={FOOTER_BACK_TITLE} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
        paddingTop: 10,
        width: WINDOW_WIDTH,
    },

    item: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
    },
});
