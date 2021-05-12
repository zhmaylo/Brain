import React, { useContext } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, FlatList, Text } from 'react-native';

import { HeaderBack } from '../components/header/HeaderBackCmp';
import { SORT_HEADER_TITLE } from '../constants/sortConst';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { WINDOW_WIDTH } from '../constants/otherConst';
import { SortItemCmp } from '../components/SortItemCmp';
import { View } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";
import { sortBySwitch } from '../api/sort';
import { clone } from '../api/clone';

export default function SortScr(props: any) {
    const { state, dispatch } = useContext(ContextApp);
 
    let predState = clone(state.sortSwitchArrRdc.sortSwitchArr);
    let nextState = clone(state.sortSwitchArrRdc.sortSwitchArr);

    const switchToState = (item: any) => {

        // prepare switch array 
        predState.forEach((item: any) =>  (item.switchOn) && (item.switchOn = false));
        predState[item.id].switchOn = item.switchOn;
        dispatch({ type: item.sortNameRdc, payload: predState });
        
        // start. sorting products
        let productsList = sortBySwitch(clone(state.productsListRdc.prodListFiltered), clone(predState));
        dispatch({ type: 'PROD_LIST_FILTERED', payload: productsList });
        productsList = sortBySwitch(clone(state.productsListRdc.productsList), clone(predState));
        dispatch({ type: 'PRODUCTS_LIST', payload: productsList });
        // end. sorting products

        
    }

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={SORT_HEADER_TITLE} />
            <View style={styles.item} >
                <FlatList
                    data={nextState}
                    renderItem={(item) => ( <SortItemCmp  item={item} onChange = {switchToState} /> )}
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
        width: WINDOW_WIDTH,
    },

    item: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
    },
});
