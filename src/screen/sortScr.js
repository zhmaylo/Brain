import React, { useContext } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, FlatList, Text } from 'react-native';

import { HeaderBack } from '../components/header/HeaderBackCmp';
import { SORT_HEADER_TITLE } from './../constants/sortConst';
import { FooterBack } from './../components/footer/FooterBackCmp';
import { FOOTER_BACK_TITLE } from './../constants/footerBackConst';
import { WINDOW_WIDTH } from './../constants/otherConst';
import { SortItemCmp } from './../components/SortItemCmp';
import { View } from 'react-native';
import { ContextApp } from "../reducers/unionRdc";

const setVolumeSwitch = (sortSwitchArr, item, dispatch) => {
        sortSwitchArr[item.id].switchOn = !item.switchOn;
        dispatch({ type: item.sortNameRdc , payload: sortSwitchArr })
    }

// console.log('sortSwitchArrRdc. action', action )
// console.log('sortSwitchArrRdc. action.payload', action.payload )
// let arrSwitch = {...state.sortSwitchArrRdc};
// arrSwitch[action.payload.id*1] = action.payload.switchOn; 

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
                    data={state.sortSwitchArrRdc.sortSwitchArr}
                    // onRefresh={() => onRefresh}
                    // refreshing={true}
                    renderItem={( {item }) => {
                        <Text color= 'black'> dfjfjfgj </Text>
                        // SortItemCmp (item, dispatch)
                        // let itm = SortItemCmp (item, dispatch)
                        // console.log('sortScr. itm', itm);
                        // setVolumeSwitch(state.sortSwitchArr, item, dispatch )
                    }}
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
