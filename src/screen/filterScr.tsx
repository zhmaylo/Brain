import React, { useContext } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';

import { HeaderBack } from '../components/header/HeaderBackCmp';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { ContextApp } from "../reducers/unionRdc";
import { FILTER_HEADER_TITLE } from '../constants/filterConst';
import { InputRangeCmp } from '../components/filter/InputRangeCmp';
import { MAX_SHOW_LIMIT, MIN_SHOW_LIMIT } from '../reducers/filterRdc';


// filterScr
export default function FilterScr(props) {
    const { state, dispatch } = useContext(ContextApp);
    
    let maxDealerPrice=state.filterRdc.maxDealerPrice;
    let minDealerPrice=state.filterRdc.minDealerPrice;
    let maxShowLimit=state.filterRdc.maxShowLimit;
    let minShowLimit=state.filterRdc.minShowLimit;
    return (

        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={FILTER_HEADER_TITLE} />
            <View style={styles.inputRange} >
                <InputRangeCmp
                    minDealerPrice={minDealerPrice} 
                    maxDealerPrice={maxDealerPrice}
                    curValue={minShowLimit}
                    stepPercent={20}
                    minFlag={true}
                    onChangeCmp={(minShowLimit) => {
                        dispatch({ type: MIN_SHOW_LIMIT, payload: minShowLimit });
                    }}
                />

                <InputRangeCmp
                    minDealerPrice={minDealerPrice}
                    maxDealerPrice={maxDealerPrice}
                    curValue={maxShowLimit}
                    stepPercent={20}
                    minFlag={false}
                    onChangeCmp={(maxShowLimit) => {
                        dispatch({ type: MAX_SHOW_LIMIT, payload: maxShowLimit});
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
        padding: 10,
    }
});
