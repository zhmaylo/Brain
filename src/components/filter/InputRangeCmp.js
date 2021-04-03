import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Pressable } from 'react-native';
import { inputLeftButton, inputRightButton } from './../../api/filter/filter';

// InputRangeCmp - input range down or up
// nameLeftButton - left button name
// nameMiddleButton - middle button name
// nameRightButton - right button name
// minValue -  lower range limit
// maxValue - upper range limit
// stepPercent - percentage change step
// curValue - current value

export const InputRangeCmp = ({

    nameLeftButton = ' - ',
    nameMiddleButton = 'res',
    nameRightButton = ' + ',
    minValue = 0,
    maxValue = 1000000,
    stepPercent = 20,
    curValue = minValue,
    resetValue = minValue,
}) => {

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} keyboardType='number-pad' defaultValue='0' />
            <View style={styles.butonGroup}>
                <ButtonRange title={nameLeftButton}
                    onPress={() => {
                        curValue = inputLeftButton(curValue, stepPercent, minValue);
                        console.log('curValue', curValue);
                    }}
                />
                < ButtonRange title={nameMiddleButton}
                    onPress={() => {
                        curValue = resetValue;
                        console.log('curValue', curValue);
                    }}
                />
                <ButtonRange
                    title={nameRightButton}
                    onPress={() => {
                        curValue = inputRightButton(curValue, stepPercent, maxValue);
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
        // <TouchableOpacity
        //     onPress={() => { onPress() }}
        // >
        <Pressable onPressIn={() => { onPress() }}>
            <Text style={styles.priceButton}> {title} </Text>
        </Pressable>
        // </TouchableOpacity>
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 160,
    },

    input: {
        height: 50,
        borderColor: 'lightgrey',
        borderWidth: 1,
        textAlign: 'right',
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

