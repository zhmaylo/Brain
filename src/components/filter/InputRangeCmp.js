import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Pressable } from 'react-native';
import { inputLeftButton, inputRightButton } from './../../api/filter/filter';
import { InputNumberCmp } from './InputNumberCmp';

// InputRangeCmp - input range down or up
// nameLeftButton - left button name
// nameMiddleButton - middle button name
// nameRightButton - right button name
// minValue -  lower range limit
// maxValue - upper range limit
// stepPercent - percentage change step
// curValue - current value
// resetValue - dafault

export const InputRangeCmp = ({
    minValue = 0,
    maxValue = 1000000,
    stepPercent = 20,
    // if 'false' - then this is the minimum component
    // if 'true' - then this is the maximum component
    minCmp = false,
    onPress,
}) => {

    const nameLeftButton = ' - ';
    const nameMiddleButton = 'res';
    const nameRightButton = ' + ';
    const resetValue = 0;

    const [curValue, setCurValue] = useState(minCmp ? maxValue : minValue);

    return (
        <View style={styles.container}>
            <InputNumberCmp curValue={curValue} />
            <View style={styles.butonGroup}>
                <ButtonRange title={nameLeftButton}
                    onPress={() => {
                        setCurValue(inputLeftButton(curValue, stepPercent, minValue));
                        console.log('curValue', curValue);
                        onPress(curValue);
                    }}
                />
                < ButtonRange title={nameMiddleButton}
                    onPress={() => {
                        setCurValue(resetValue);
                        console.log('curValue', curValue);
                    }}
                />
                <ButtonRange
                    title={nameRightButton}
                    onPress={() => {
                        setCurValue(inputRightButton(curValue, stepPercent, maxValue));
                        console.log('curValue', curValue);
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
        flex: 1,
        width: 160,
    },


    butonGroup: {
        flexDirection: 'row',
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

