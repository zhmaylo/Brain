import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { inputLeftButton, inputMiddleButton, inputRightButton } from './../../api/filter/filter';
import { InputNumberCmp } from './InputNumberCmp';


// InputRangeCmp - input range down or up
// nameLeftButton - left button name
// nameMiddleButton - middle button name
// nameRightButton - right button name
// resetValue - dafault
// minValue -  lower range limit
// maxValue - upper range limit
// stepPercent - percentage change step
// minCmp - flag: 'false' minimum component
// minCmp - flag: 'true' maximum component

export const InputRangeCmp = ({
    minValue = 0,
    maxValue = 1000000,
    stepPercent = 20,
    // if 'false' - then this is the maximum component
    // if 'true' - then this is the minimum component
    minFlag = true,
    onChangeCmp,
}) => {
    
    const nameLeftButton = ' - ';
    const nameMiddleButton = 'R';
    const nameRightButton = ' + ';
    const resetValue = 0;
    
    // curValue - current value
    const [_curValue, setCurValue] = useState(minFlag ? minValue : maxValue);
    return (
        <View style={styles.container}>
            <InputNumberCmp
                curValue={_curValue}
                minValue={minValue}
                maxValue={maxValue}
                onChange={(curValue) => {
                    setCurValue(curValue);
                    onChangeCmp(curValue);
                }}
                />
            <View style={styles.butonGroup}>
                <ButtonRange title={nameLeftButton}
                    onPress={() => {
                        let curValue = inputLeftButton(_curValue, stepPercent, minValue);
                        setCurValue(curValue);
                        onChangeCmp(curValue);
                    }}
                    />
                < ButtonRange title={nameMiddleButton}
                    onPress={() => {
                        let curValue = inputMiddleButton(_curValue, minValue, maxValue, minFlag);
                        setCurValue(curValue);
                        onChangeCmp(curValue);
                    }}
                    />
                <ButtonRange
                    title={nameRightButton}
                    onPress={() => {
                        let curValue = inputRightButton(_curValue, stepPercent, maxValue);
                        setCurValue(curValue);
                        onChangeCmp(curValue);
                    }}
                    />
            </View>
        </View>
    )
};

// ButtonRange - range change button
// title - button name
// onPress - callback, click handling 
const ButtonRange = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={() => { onPress() }} >
            <Text style={styles.priceButton}> {title} </Text>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: 160,
    },


    butonGroup: {
        flexDirection: 'row',
        width:160,
        justifyContent: 'space-between',
    },

    priceButton: {
        borderColor: "white",
        borderWidth: 1,
        height: 50,
        width: 50,
        backgroundColor: 'lightgray',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

});

