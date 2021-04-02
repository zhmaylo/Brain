import React, { useCallback, useContext, useState } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Text, TextInput } from 'react-native';

import { HeaderBack } from '../components/header/HeaderBackCmp';
import { FooterBack } from '../components/footer/FooterBackCmp';
import { FOOTER_BACK_TITLE } from '../constants/footerBackConst';
import { WINDOW_WIDTH } from '../constants/otherConst';
import { ContextApp } from "../reducers/unionRdc";
import { FILTER_HEADER_TITLE } from './../constants/filterConst';
import RangeSlider, { Slider } from 'react-native-range-slider-expo';

export default function filterScr(props) {
    const { state, dispatch } = useContext(ContextApp);

    const [fromValue, setFromValue] = useState(0);
    const [toValue, setToValue] = useState(0);
    const [value, setValue] = useState(0);

    // getFilterProd()
    return (

        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <HeaderBack props={props} headerName={FILTER_HEADER_TITLE} />
            <View style={styles.item} >
                <TextInput keyboardType='number-pad' defaultValue='input number' />
                <View>
                    <RangeSlider min={0} max={250000} step={100}
                         fromValueOnChange={value => setFromValue(value)}
                         toValueOnChange={value => setToValue(value)}
                         initialFromValue={11}
                         styleSize='large'
                    />
                    <Text>from value:  {fromValue}</Text>
                    <Text>to value:  {toValue}</Text>
               </View>
               <View>
                    <Slider min={0} max={40} step={4}
                         valueOnChange={value => setValue(value)}
                         initialValue={12}
                         knobColor='red'
                         valueLabelsBackgroundColor='black'
                         inRangeBarColor='purple'
                         outOfRangeBarColor='orange'
                    />
                    <Text>value:  {value}</Text>
               </View>
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
