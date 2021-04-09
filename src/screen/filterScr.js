import React, { useContext } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Text, TextInput, Button, TouchableOpacity } from 'react-native';

import { HeaderBack } from '../components/header/HeaderBackCmp';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { ContextApp } from "../reducers/unionRdc";
import { FILTER_HEADER_TITLE } from './../constants/filterConst';
import { InputRangeCmp } from '../components/filter/InputRangeCmp';


// filterScr
export default function filterScr(props) {
    const { state, dispatch } = useContext(ContextApp);
    console.log('🚀 ~ file: filterScr.js ~ line 15 ~ filterScr ~ state.filterRdc.filterDealPrice', state.filterRdc.filterDealPrice);
    
    let maxValue=state.filterRdc.filterDealPrice.maxDealerPrice;
    let minValue=state.filterRdc.filterDealPrice.minDealerPrice;
    // getFilterProd()
    return (

        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={FILTER_HEADER_TITLE} />
            <View style={styles.inputRange} >
                <InputRangeCmp
                    minValue={minValue} 
                    maxValue={maxValue}
                    stepPercent={20}
                    minFlag={true}
                    onChangeCmp={(val) => {
                        console.log('🚀 ~ file: filterScr.js ~ line 26 ~ filterScr ~ val', val);
                    }}
                />

                <InputRangeCmp
                    minValue={minValue}
                    maxValue={maxValue}
                    stepPercent={20}
                    minFlag={false}
                    onChangeCmp={(val) => {
                        console.log('🚀 ~ file: filterScr.js ~ line 26 ~ filterScr ~ val', val);
                    }}
                />
            </View>
            <FooterBack props={props} footerName={FOOTER_BACK_TITLE} />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        flexDirection: 'column',
    },
    inputRange: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        // alignItem: 'center',
        padding: 10,

    }
});
